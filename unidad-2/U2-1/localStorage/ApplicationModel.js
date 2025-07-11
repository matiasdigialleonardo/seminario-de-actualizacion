class ApplicationModel
{
    constructor()
    {
        this._storage = localStorage;
        this._authData = new Map();
        this._inventoryData = new Map();
        this._maxLoginFailedAttempts = 3;
        this._currentlyLoggedUser = null;
        this._isRunning = true;



        this.Roles = {
            ADMIN: 'administrador',
            CLIENT: 'cliente',
            SELLER: 'vendedor',
            WAREHOUSE: 'deposito'
        };

        this.Actions = {
            READ:	'READ',
            CREATE:	'CREATE',
            UPDATE:	'UPDATE',
            DELETE:	'DELETE',
            BUY:	'BUY',
            MANAGE_USERS: 'MANAGE_USERS',
        };


        this.RolePerms = {
            [this.Roles.ADMIN]:     [ this.Actions.READ, this.Actions.CREATE, this.Actions.UPDATE, this.Actions.DELETE, this.Actions.BUY, this.Actions.MANAGE_USERS ],
            [this.Roles.CLIENT]:    [ this.Actions.READ, this.Actions.BUY ],
            [this.Roles.SELLER]:    [ this.Actions.READ, this.Actions.CREATE, this.Actions.UPDATE, this.Actions.BUY ],
            [this.Roles.WAREHOUSE]: [ this.Actions.READ, this.Actions.CREATE, this.Actions.UPDATE, this.Actions.DELETE ]
        };




        if (!this._storage.getItem('lastUsedId'))
        {
            this._storage.setItem('lastUsedId', 22);
        }

        if (!this._storage.getItem('_authData'))
        {
            let userData =
            [
                {
                    password: '987654',
                    failedLoginCounter: 0,
                    isLocked: false,
                    role: this.Roles.ADMIN, 
                },
                {
                    password: '987654',
                    failedLoginCounter: 0,
                    isLocked: false,
                    role: this.Roles.CLIENT,
                },
                {
                    password: '987654',
                    failedLoginCounter: 0,
                    isLocked: false,
                    role: this.Roles.SELLER,
                },
                {
                    password: '987654',
                    failedLoginCounter: 0,
                    isLocked: false,
                    role: this.Roles.WAREHOUSE,
                },

            ]

            this._authData.set('scorpion', userData[0] );
            this._authData.set('subZero', userData[1] );
            this._authData.set('raiden', userData[2] );
            this._authData.set('kitana', userData[3] );

            let dataArray = [...this._authData];
            this._storage.setItem('_authData', JSON.stringify(dataArray));
        }  

        if (!this._storage.getItem('_inventoryData'))
        {
            let productData = [
                {
                    id: 1,
                    name: 'Lavandina x 1L',
                    price: 875.25,
                    stock: 3000
                },
                {
                    id: 4,
                    name: 'Detergente x 500mL',
                    price: 1102.45,
                    stock: 2010
                },
                {
                    id: 22,
                    name: 'Jabón en polvo x 250g',
                    price: 650.22,
                    stock: 407
                }
            ];

            this._inventoryData.set('1', productData[0]);
            this._inventoryData.set('4', productData[1]);
            this._inventoryData.set('22', productData[2]);

            let dataArray = [...this._inventoryData];
            this._storage.setItem('_inventoryData', JSON.stringify(dataArray));
        }



    }

    stop()
    {
        this._isRunning = false;
    }

    getCurrentUserData()
    {
        let parsedData = JSON.parse(this._storage.getItem('_authData'));
        return new Map(parsedData);
    }

    getLastUsedId()
    {
        return parseInt(this._storage.getItem('lastUsedId'));
    }

    getCurrentInventoryData()
    {
        let parsedData = JSON.parse(this._storage.getItem('_inventoryData'));
        return new Map(parsedData);
    }

    getInventoryData()
    {
        return this._inventoryData;
    }

    isValidUserGetData( username )
    {
        this._authData = this.getCurrentUserData();

        return this._authData.get(username);
    }

    getMaxLoginAttempts()
    {
        return this._maxLoginFailedAttempts;
    }

    checkUserCanPerformAction(action)
    {
        let role = this.getUser(this._currentlyLoggedUser).role;

        return this.RolePerms[role].includes(action);
    }

    validatePassword(password)
    {
        let api_return = 
        {
            status: false,
            result: null
        };

        if (password == undefined || password == null || password == '')
        {
            api_return.result = 'PASSWORD_EMPTY'
            return api_return;
        }

        if (password.length < 8 || password.length > 16)
        {
            api_return.result = 'PASSWORD_WRONG_LENGTH'
            return api_return;
        }

        if (!/[A-Z]/.test(password))
        {
            api_return.result = 'PASSWORD_NO_CAPS'
            return api_return;
        }

        const specialChars = password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
        if (!specialChars || specialChars.length < 2)
        {
            api_return.result = 'PASSWORD_NO_SPECIAL_CHARS'
            return api_return;
        }

        api_return.status = true;
        api_return.result = 'PASSWORD_VALID';

        return api_return;

    }

    authenticateUser( username, password )
    {
        let api_return = 
        {
            status: false,
            result: null
        };


        if ( (username != undefined && username != null && username != '') && (password != undefined && password != null && password != '') )
        {
            let userData = this.isValidUserGetData(username);

            if (userData == null)
            {
                api_return.status = false;
                api_return.result = "USER_NOT_FOUND"
            }
            else if ( userData.isLocked == false)
            {
                if( userData.password === password )
                {
                    this._currentlyLoggedUser = username;
                    api_return.status = true;
                    api_return.result = 'USER_LOGGED'
                }
                else
                {
                    api_return.status = false;
                    api_return.result = 'USER_PASSWORD_FAILED';

                    userData.failedLoginCounter++;
                    
                    if ( userData.failedLoginCounter == this._maxLoginFailedAttempts )
                    {
                        userData.isLocked = true;
                        api_return.status = false;
                        api_return.result = 'USER_BLOCKED';
                    }
                }
            }
            else
            {
                api_return.status = false;
                api_return.result = 'USER_BLOCKED';
            }
            
        }
        
        return api_return;
    }


    createUser(username_creation_attempt, password_creation_attempt)
    {

        this._authData = this.getCurrentUserData();

        this._authData.set(username_creation_attempt, {
            password: password_creation_attempt,
            failedLoginCounter: 0,
            isLocked: false,
            role: this.Roles.CLIENT,
        });

        let dataArray = [...this._authData];
        this._storage.setItem('_authData', JSON.stringify(dataArray));
    }


    getUser(username)
    {

        this._authData = this.getCurrentUserData();

        return this._authData.get(username);
    }

    getUsers()
    {
        let api_return = { status: false, result: null}

        if( !this.checkUserCanPerformAction(this.Actions.MANAGE_USERS) )
        {
            api_return.result = 'PERMISSION_DENIED';
        }
        else
        {
            this._authData = this.getCurrentUserData();
            api_return.status = true;
            api_return.result = this._authData;
        }
        
        return api_return;
    }

    changePassword(newPassword)
    {
        this._authData = this.getCurrentUserData();
    
        this._authData.get(this._currentlyLoggedUser).password = newPassword;
    }

    isValidRole(role)
    {
        return Object.values(this.Roles).includes(role);
    }


    changeUserRole(username, newUserRole)
    {
        let api_return = { status: false, result: null }

        if ( !this.checkUserCanPerformAction(this.Actions.MANAGE_USERS )) 
        {
            api_return.result = 'PERMISSION_DENIED';
        }
        else
        {
            let user = this.getUser(username);

            if( !this.isValidRole(newUserRole) )
            {
                api_return.result == 'ROLE_INVALID'
            }
            else
            {
                user.role = newUserRole;
                api_return.status = true;
            }  
        }

        return api_return;
    }

    getProduct(product_id)
    {
        this._inventoryData = this.getCurrentInventoryData();

        return this._inventoryData.get(product_id);
    }

    getProducts()
    {
        let api_return = { status: false, result: null };

        if( !this.checkUserCanPerformAction(this.Actions.READ) )
        {
            api_return.result = 'PERMISSION_DENIED';
        }

        this._inventoryData = this.getCurrentInventoryData();

        api_return.status = true;
        api_return.result = this._inventoryData;

        return api_return;
    }

    addProduct(name, price, stock)
    {
        let api_return = { status: false, result: null };

        if( !this.checkUserCanPerformAction(this.Actions.CREATE) )
        {
            api_return.result = 'PERMISSION_DENIED';
        }
        else
        {
            let api_return = { status: false, result: false }

            let lastUsedID = this.getLastUsedId();
            lastUsedID++;

            const newProduct = {
                id: lastUsedID,
                name: name,
                price: price,
                stock: stock
            };

            this._inventoryData = this.getCurrentInventoryData();

            this._inventoryData.set(String(lastUsedID), newProduct);

            let dataArray = [...this._inventoryData];
            this._storage.setItem('_inventoryData', JSON.stringify(dataArray));

            this._storage.setItem('lastUsedId', lastUsedID);

            api_return.status = true;
            api_return.result = 'PRODUCT_ADDED';
        }

        return api_return;
    }

    updateProduct(productToUpdate, newProductName, newProductPrice, newProductStock)
    {
        let api_return = { status: false, result: null };

        if( !this.checkUserCanPerformAction(this.Actions.UPDATE) )
        {
            api_return.result = 'PERMISSION_DENIED';
        }
        else
        {
            let product = this.getProduct(productToUpdate);

            product.name = newProductName;
            product.price = newProductPrice;
            product.stock = newProductStock;

            this._inventoryData = this.getCurrentInventoryData();

            this._inventoryData.set(productToUpdate, product);

            let dataArray = [...this._inventoryData];
            this._storage.setItem('_inventoryData', JSON.stringify(dataArray));

            api_return.status = true;
            api_return.result = 'PRODUCT_UPDATED'
        }

        return api_return;
    }

    deleteProduct(articleToDelete)
    {
        let api_return = { status: false, result: null };

        if( !this.checkUserCanPerformAction(this.Actions.DELETE) )
        {
            api_return.result = 'PERMISSION_DENIED';
        }
        else
        {
            this._inventoryData = this.getCurrentInventoryData();

            this._inventoryData.delete(articleToDelete);
            let dataArray = [...this._inventoryData];
            this._storage.setItem('_inventoryData', JSON.stringify(dataArray));

            api_return.status = true;
            api_return.result = 'PRODUCT_DELETED';
        }

        return api_return;
    }


    checkProductStock(product_id, amountToBuy)
    {
        let api_return = { status: false, result: null };

        let product = this.getProduct(product_id);

        if( product.stock >= amountToBuy)
        {
            api_return.status = true;
            api_return.result = 'STOCK_AVAILABLE'
        }

        return api_return;
    }

    changeProductStock(product_id, amountToBuy)
    {
        let api_return = { status: false, result: null };

        let product = this.getProduct(product_id);

        product.stock -= amountToBuy;

        this._inventoryData = this.getCurrentInventoryData();

        this._inventoryData.set(product_id, product);

        let dataArray = [...this._inventoryData];
        this._storage.setItem('_inventoryData', JSON.stringify(dataArray));

        api_return.status = true;
        api_return.result = 'PRODUCT_STOCK_CHANGED'

        return api_return;
    }
}

export { ApplicationModel };