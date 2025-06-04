class ApplicationUi
{
    constructor(model)
    {
        this._model = model;
    }

    loginView()
    {
        let username = window.prompt("Ingrese su nombre de usuario:");
        let password = window.prompt("Ingrese contraseña:");

        let api_return = this._model.authenticateUser( username, password );
        
        if ( api_return.status )
        {
            alert('Usuario autenticado exitosamente');
        }
        else if ( api_return.status == false )
        {
            switch ( api_return.result ) 
            {
                case 'USER_BLOCKED':
                    alert('Usuario bloqueado. Contacte al administrador');
                    break;

                case 'USER_PASSWORD_FAILED':
                    alert('Usuario y/o contraseña incorrecta');
                    break;

                case 'USER_NOT_FOUND':
                    alert('El usuario especificado no existe');
                    break;

                default:
                    alert('Error desconocido');
                    break;
            }
        }

        return api_return;
    }

    changePasswordView()
    {
        let new_user_password = window.prompt('Ingrese su nueva contraseña')
        let api_return = this._model.validatePassword(new_user_password);

        if( api_return.status == true )
        {
            this._model.changePassword(new_user_password);
            alert('Contraseña cambiada exitosamente')
        }
        else if ( api_return.status == false )
        {   
            switch ( api_return.result ) 
            {
                case 'PASSWORD_EMPTY':
                    alert('La contraseña no puede estar vacia');
                    break;

                case 'PASSWORD_WRONG_LENGTH':
                    alert('La contraseña debe tener entre 8 y 16 caracteres');
                    break;

                case 'PASSWORD_NO_CAPS':
                    alert('El La contraseña debe contener al menos una letra mayúscula');
                    break;

                case 'PASSWORD_NO_SPECIAL_CHARS':
                    alert('La contraseña debe contener al menos 2 símbolos especiales');
                    break;

                default:
                    alert('Error desconocido');
                    break;
            }
        }

        return api_return;
    }

    loginEventLoop()
    {
        let attempts = 0;
        let api_return = this.loginView();
            
        while( api_return.result != 'USER_LOGGED' && attempts < maxLoginFailedAttempts - 1 )
        {
            attempts++;
            api_return = loginView();
        }

        return api_return;
    }

    changeUserRoleView()
    {
        let username = window.prompt('Ingrese el nombre de usuario');
        let newUserRole = window.prompt('Inrese el nuevo rol del usuario');

        let api_return = this._model.changeUserRole(username, newUserRole);

        if ( api_return.status )
        {
            alert('Rol cambiado correctamente');
        }
        else
        {
            alert('El rol ingresado no es valido');
        }

        return api_return;

    }

    listUsersView()
    {
        let api_return = this._model.getUsers();

        if( api_return.status == true)
        {
            usersData = api_return.result;

            for (let [key, user] of usersData)
            {
                window.alert(
                    `Nombre de usuario: ${key}\n` +
                    `Esta bloqueado: ${user.isLocked}\n` +
                    `Rol: ${user.role}\n`
                );
            }
        }

        return api_return;
    }

    createAccountView()
    {
        let username_creation_attempt = window.prompt('Ingrese un nombre de usuario:')
        let password_creation_attempt = window.prompt('Ingrese una contraseña:')

        let api_return = this._model.authenticateUser(username_creation_attempt, password_creation_attempt);

        if( api_return.result == 'USER_NOT_FOUND')
        {
            api_return = this._model.validatePassword(password_creation_attempt);

            if( api_return.result == 'PASSWORD_VALID')
            {
                this._model.createUser(username_creation_attempt, password_creation_attempt);
            }
        }

        return api_return;
    }

    userMenuView()
    {
        let menu_option = window.prompt('1. Cambiar contraseña: \n2. Listar usuarios. \n3. Gestionar roles. \nx. Volver \nSeleccion una opción:')

        let api_return = this._model.backCode();

        switch ( menu_option )
        {
            case '1':
                api_return = this.changePasswordView();
                break;

            case '2':
                api_return = this.listUsersView();
                break;

            case '3':
                if (!this._model.checkUserCanPerformAction(this._model.Actions.MANAGE_USERS))
                {
                    alert('Usted no posee los permisos necesarios para realizar esta acción');
                    api_return.result = this._model.exitCode();
                }
                else
                {
                    api_return = this.changeUserRoleView();   
                }
                break;

            case 'x':
                break;
        }

        if (api_return.result == 'PERMISSION_DENIED')
        {
            alert('Usted no posee los permisos necesarios para realizar esta acción');
        }

        return api_return;

    }

    listProductsView()
    {
        let products = this._model.getProducts();

        for (let [key, product] of products)
        {
            window.alert(
                `ID: ${product.id}\n` +
                `Name: ${product.name}\n` +
                `Price: $${product.price}\n` +
                `Stock: ${product.stock}\n`
            );
        }

        return { status: true, result: 'PRODUCTS_LISTED'}
    }

    addProductView()
    {
        let newProductName = window.prompt('Ingrese el nombre del articulo: ');
        let newProductPrice = window.prompt('Ingrese el precio del articulo: ');
        let newProductStock = window.prompt('Ingrese el stock del articulo: ');

        let api_return = this._model.addProduct(newProductName, newProductPrice, newProductStock);

        return api_return;

    }

    updateProductView()
    {
        let articleToEdit = window.prompt('Ingrese el id del artículo a modificar');

        let newProductName = window.prompt('Ingrese el nuevo nombre');
        let newProductPrice = window.prompt('Ingrese el nuevo precio');
        let newProductStock = window.prompt('Ingrese el nuevo stock');

        let api_return = this._model.updateProduct(articleToEdit, newProductName, newProductPrice, newProductStock);

        return api_return;

    }

    deleteProductView()
    {
        let articleToDelete = window.prompt('Ingrese el id del articulo a eliminar');

        let api_return = this._model.deleteProduct(articleToDelete);

        return api_return;
    }

    buyProductView()
    {
        let product_id = window.prompt('Ingrese el id del articulo que desea comprar');
        let amountToBuy = window.prompt('Ingrese la cantidad que desea comprar');
        let confirmation = false;

        let api_return = this._model.checkProductStock(product_id, amountToBuy);

        if( api_return.result != 'STOCK_AVAILABLE')
        {
            alert("No contamos con suficiente stock para procesar su compra.")
        }
        else if( api_return.result == 'STOCK_AVAILABLE')
        {
            confirmation = confirm('¿Desea confirmar la compra?');

            if (confirmation)
            {
                api_return = this._model.changeProductStock(product_id, amountToBuy)
                {
                    if( api_return.result == 'PRODUCT_STOCK_CHANGED' )
                    {
                        alert('Compra realizada');
                    }
                }
            }
            else
            {
                alert('Compra cancelada');
            }
        }
        else if (api_return.status == false )
        {
            alert('No se pudo concretar la compra.')
        }

        return api_return;
    }

    productsMenuView()
    {
        let menu_option = window.prompt('1. Listar articulos: \n2. Nuevo articulo: \n3. Editar articulo: \n4. Eliminar articulo \n5. Comprar articulo \nx. Volver: \nSeleccion una opción:')

        let api_return = this._model.backCode();

        switch( menu_option )
        {
            case '1':
                api_return = this.listProductsView();
                break;

            case '2':
                api_return = addProductView();
                break;

            case '3':
                api_return = updateProductView();
                break;

            case '4':
                api_return = deleteProductView();
                break;
            case '5':
                api_return = buyProductView();
                break;
        }

        if (api_return.result == 'PERMISSION_DENIED')
        {
            alert('Usted no posee los permisos necesarios para realizar esta acción');
        }

        return api_return;
    }

    mainMenuView()
    {
        let menu_option = window.prompt('1. Gestionar usuario: \n2. Gestionar articulos \nx. Salir \nSeleccion una opción:')

        let api_return = this._model.exitCode();

        switch( menu_option )
        {
            case '1':
                api_return = this.userMenuView();
                while( api_return.result != 'BACK')
                {
                    api_return = this.userMenuView();
                }
                break;

            case '2':
                api_return = this.productsMenuView();
                while( api_return.result != 'BACK')
                {
                    api_return = this.productsMenuView();
                }
                break;

            case 'x':
                break;
        }

        return api_return;
    }

    indexMenuView()
    {
        let menu_option = window.prompt('1. Iniciar sesion: \n2. Crear cuenta de usuario: \nx. Salir \n Seleccion una opción:')

        let api_return = this._model.exitCode();

        switch( menu_option )
        {

            case '1':
                api_return = this.loginEventLoop();
                if( api_return.result == 'USER_BLOCKED')
                {
                    api_return = exitCode();
                }

                break;
            case '2':
                api_return = this.createAccountView();
                break;

            case 'x':
                break;
        }

        return api_return;
    }

}

export { ApplicationUi };