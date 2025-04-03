#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <memory>

class User
{
    public:
        std::string username;
        std::string password;
        bool is_logged;

        User(const std::string &username, const std::string &password)
            : username(username), password(password), is_logged(false) {}
};

class Article {

    public:
        std::string name;
        double price;
        int stock;

        Article(std::string n, double p, int s)
        : name(n), price(p), stock(s) {}
};


bool checkPassword(std::string password) {
    if (password.length() < 8 || password.length() > 16) {
        std::cout << password.length();
        return false;
    }

    bool hasUpperCase = false;
    int specialCharCount = 0;

    for (char c : password) {
        if (std::isupper(c)) {
            hasUpperCase = true;
        }
        if (!std::isalnum(c)) {
            specialCharCount++;
        }
    }

    return hasUpperCase && (specialCharCount >= 2);
}

User* findUser(std::vector<User*>& users, std::string& username, std::string& password)
{
    for (auto& user : users) {
        if (user->username == username && user->password == password) {
            return user;
        }
    }
    return nullptr;
}

User* createUser()
{
    std::string username;
    std::string password;

    std::cout << "Ingrese su usuario: ";
    std::getline(std::cin, username);

    std::cout << "Ingrese su contrasenia: ";
    std::getline(std::cin, password);

    if(!checkPassword(password))
    {
        std::cout << "La contrasenia debe tener entre 8 y 16 caracteres, al menos una mayuscula y dos simbolos especiales." <<  std::endl;
    }
    else
    {
        return new User(username, password);
    }

    return nullptr;
};

void displayUserMenu(User* user)
{
    std::cout << "Bienvenido/a " << user->username << "!" << std::endl;

    std::string option;
    while (true) {
        std::cout << "1. Cambiar contrasenia\nX. Salir\nSeleccione una opcion: ";
        std::getline(std::cin, option);

        if (option == "1") {
            std::string new_password;
            std::cout << "Ingrese su nueva contrasenia: ";
            std::getline(std::cin, new_password);

            if(!checkPassword(new_password))
            {
                std::cout << "La contrasenia debe tener entre 8 y 16 caracteres, al menos una mayuscula y dos simbolos especiales." << std::endl;
            }
            else
            {
                user->password = new_password;
                std::cout << "Su contrasenia ha sido cambiada exitosamente." << std::endl;
            }
        }
        else if (option == "X" || option == "x") {
            break;
        }
        else {
            std::cout << "Opcion invalida. Intente de nuevo." << std::endl;
        }
    }

}


void loginSection(std::vector<User*>& users) {
    int login_attempts = 0;
    while (login_attempts < 3) {
        std::string login_username, login_password;
        std::cout << "Usuario: ";
        std::getline(std::cin, login_username);
        std::cout << "Contrasenia: ";
        std::getline(std::cin, login_password);
        User* foundUser = findUser(users, login_username, login_password);
        if (foundUser) {
            displayUserMenu(foundUser);
            return;
        } else {
            login_attempts++;
            std::cout << "Usuario o contrasenia incorrectos." << std::endl;
        }
    }
    std::cout << "Usuario bloqueado. Contacte al administrador." << std::endl;
}

void createAccountSection(std::vector<User*>& users) {
    User* newUser = createUser();
    if (newUser) {
        users.push_back(newUser);
        std::cout << "Usuario creado." << std::endl;
    }
}

void displayMainMenu(std::vector<User*>& users) {
    std::string option;

    while (true) {
        std::cout << "1. Iniciar sesion\n2. Crear cuenta de usuario\n3. Salir\nSeleccione una opcion: ";
        std::getline(std::cin, option);

        if (option == "1") {
            loginSection(users);
        } else if (option == "2") {
            createAccountSection(users);
        } else if (option == "3") {
            return;
        } else {
            std::cout << "Opcion invalida. Intente de nuevo." << std::endl;
        }
    }
}

int main()
{
    // Users creation section
    std::vector<User*> users;
    int login_attempts = 0;
    User* currentUser = nullptr;
    bool user_found = false;

    User* user1 = new User("a", "a");
    User* user2 = new User("b", "b");

    users.push_back(user1);
    users.push_back(user2);

    // Articles creation section
    std::unordered_map<int, std::unique_ptr<Article>> inventory;
    
    inventory[1] = std::unique_ptr<Article>(new Article("Lavandina x 1L", 875.25, 3000));
    inventory[4] = std::unique_ptr<Article>(new Article("Detergente x 500mL", 1102.45, 2010));
    inventory[22] = std::unique_ptr<Article>(new Article("Jabón en polvo x 250g", 650.22, 407));

    displayMainMenu(users);

    for (auto user : users) {
        delete user;
    }

    return 0;
}

