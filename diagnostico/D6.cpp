#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <memory>

using namespace std;

class User
{
    public:
        int id;
        string username;
        string password;
        bool is_logged;

        User(const string &username, const string &password)
            : username(username), password(password), is_logged(false) {}
};

class Article {

    public:
        string name;
        double price;
        int stock;
        int id;

        Article(string name, double price, int stock)
        : name(name), price(price), stock(stock) {}
};

// This keeps track of the current article id and gives the new one on function call
int article_id_dispenser()
{
    static int currentArticleId = 22;
    return ++currentArticleId;
}

unique_ptr<Article> createArticle(string name, double price, int stock)
{
    return make_unique<Article>(name, price, stock);
}

void editArticle(unordered_map<int, unique_ptr<Article>>& articles,int articleId, string name, double price, int stock)
{
    articles[articleId]->name = name;
    articles[articleId]->price = price;
    articles[articleId]->stock = stock;
}

void deleteArticle(unordered_map<int, unique_ptr<Article>>& articles, int articleId)
{
    articles.erase(articleId);
}

void listArticles(unordered_map<int, unique_ptr<Article>>& articles)
{
    for (const auto& article : articles) {
        cout << "ID: " << article.first << endl
                    << "Nombre: " << article.second->name << endl
                    << "Precio: " << article.second->price << endl
                    << "Stock: " << article.second->stock << endl << endl;
    };
}



bool checkPassword(string password) {
    if (password.length() < 8 || password.length() > 16)
    {
        cout << password.length();
        return false;
    }

    bool hasUpperCase = false;
    int specialCharCount = 0;

    for (char c : password)
    {
        if (isupper(c))
        {
            hasUpperCase = true;
        }
        if (!isalnum(c))
        {
            specialCharCount++;
        }
    }

    return hasUpperCase && (specialCharCount >= 2);
}

User* findUser(vector<User*>& users, string& username, string& password)
{
    for (auto& user : users)
    {
        if (user->username == username && user->password == password)
        {
            return user;
        }
    }
    return nullptr;
}

User* createUser()
{
    string username;
    string password;

    cout << "Ingrese su usuario: ";
    getline(cin, username);

    cout << "Ingrese su contrasenia: ";
    getline(cin, password);

    if(!checkPassword(password))
    {
        cout << "La contrasenia debe tener entre 8 y 16 caracteres, al menos una mayuscula y dos simbolos especiales." <<  endl;
    }
    else
    {
        return new User(username, password);
    }

    return nullptr;
};

void displayArticlesMenu(User* user, unordered_map<int, unique_ptr<Article>>& articles)
{
    string option;
    while (true) {
        cout << "1. Mostrar articulos" << endl;
        cout << "2. Agregar articulo" << endl;
        cout << "3. Editar articulo" << endl;
        cout << "4. Borrar articulo" << endl;
        cout << "X. Salir" << endl; 
        cout << "Seleccione una opcion: ";
        
        getline(cin, option);

        if (option == "1")
        {
            listArticles(articles);
        }
        else if (option == "2")
        {
            string article_name;
            double article_price;
            int article_stock;

            cout << "Ingrese el nombre del articulo: ";
            getline(cin, article_name);
            cout << "Ingrese el precio del articulo: ";
            cin >> article_price;
            cout << "Ingrese el stock del articulo: ";
            cin >> article_stock;
            cin.ignore();

            int article_id = article_id_dispenser();

            articles[article_id] = createArticle(article_name, article_price, article_stock);;

        }
        else if (option == "3")
        {   

            int articleId;
            string articleName;
            double articlePrice;
            int articleStock;

            cout << "Ingrese el id del producto:";
            cin >> articleId;
            cin.ignore();
            cout << "Ingrese el nombre del articulo: ";
            getline(cin, articleName);
            cout << "Ingrese el precio del articulo: ";
            cin >> articlePrice;
            cout << "Ingrese el stock del articulo: ";
            cin >> articleStock;
            cin.ignore();

            editArticle(articles, articleId, articleName, articlePrice, articleStock);
        }
        else if (option == "4")
        {
            int articleId;

            cout << "Ingrese el id del articulo:" << endl;
            cin >> articleId;

            deleteArticle(articles, articleId);
        }
        else if (option == "X" || option == "x") {
            break;
        }
        else
        {
            cout << "Opcion invalida. Intente de nuevo." << endl;
        }
    }
}


void displayUserMenu(User* user, unordered_map<int, unique_ptr<Article>>& articles)
{
    cout << "Bienvenido/a " << user->username << "!" << endl;

    string option;
    while (true) {
        cout << "1. Cambiar contrasenia" << endl;
        cout << "2. Manejar articulos" << endl;
        cout << "X. Salir" << endl; 
        cout << "Seleccione una opcion: ";
        
        getline(cin, option);

        if (option == "1") {
            string new_password;
            cout << "Ingrese su nueva contrasenia: ";
            getline(cin, new_password);

            if(!checkPassword(new_password))
            {
                cout << "La contrasenia debe tener entre 8 y 16 caracteres, al menos una mayuscula y dos simbolos especiales." << endl;
            }
            else
            {
                user->password = new_password;
                cout << "Su contrasenia ha sido cambiada exitosamente." << endl;
            }
        }
        if (option == "2")
        {
            displayArticlesMenu(user, articles);
        }
        else if (option == "X" || option == "x") {
            break;
        }
        else
        {
            cout << "Opcion invalida. Intente de nuevo." << endl;
        }
    }
}

void loginSection(vector<User*>& users, unordered_map<int, unique_ptr<Article>>& articles) {
    int login_attempts = 0;
    while (login_attempts < 3) {
        string login_username, login_password;
        cout << "Usuario: ";
        getline(cin, login_username);
        cout << "Contrasenia: ";
        getline(cin, login_password);
        User* foundUser = findUser(users, login_username, login_password);
        if (foundUser)
        {
            displayUserMenu(foundUser, articles);
            return;
        }
        else
        {
            login_attempts++;
            cout << "Usuario o contrasenia incorrectos." << endl;
        }
    }
    cout << "Usuario bloqueado. Contacte al administrador." << endl;
}

void createAccountSection(vector<User*>& users) {
    User* newUser = createUser();
    if (newUser) {
        users.push_back(newUser);
        cout << "Usuario creado." << endl;
    }
}

void displayMainMenu(vector<User*>& users, unordered_map<int, unique_ptr<Article>>& articles) {
    string option;

    while (true) {
        cout << "1. Iniciar sesion" << endl;
        cout << "2. Crear cuenta de usuario" << endl;
        cout << "X. Salir" << endl;
        cout << "Seleccione una opcion: ";
        getline(cin, option);

        if (option == "1") 
        {
            loginSection(users, articles);
        } 
        else if (option == "2")
        {
            createAccountSection(users);
        }
        else if (option == "X" || option == "x")
        {
            return;
        } 
        else
        {
            cout << "Opcion invalida. Intente de nuevo." << endl;
        }
    }
}

int main()
{
    // Users creation section
    vector<User*> users;
    int login_attempts = 0;
    User* currentUser = nullptr;
    bool user_found = false;

    User* user1 = new User("a", "a");
    User* user2 = new User("b", "b");

    users.push_back(user1);
    users.push_back(user2);

    // Articles creation section
    unordered_map<int, unique_ptr<Article>> articles;
    
    articles[1] = unique_ptr<Article>(new Article("Lavandina x 1L", 875.25, 3000));
    articles[4] = unique_ptr<Article>(new Article("Detergente x 500mL", 1102.45, 2010));
    articles[22] = unique_ptr<Article>(new Article("Jabon en polvo x 250g", 650.22, 407));

    displayMainMenu(users, articles);

    for (auto user : users)
    {
        delete user;
    }

    return 0;
}

