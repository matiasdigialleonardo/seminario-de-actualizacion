#include <iostream>
#include <vector>

class User {
    public:
        std::string username;
        std::string password;
        bool is_logged;
};

void displayMenu(User* user)
{
    std::cout << "Bienvenido/a " << user->username << "!" << std::endl;

    char action;
    while (true) {
        std::cout << "1. Cambiar contrasenia\nX. Salir\nSeleccione una opcion: ";
        std::cin >> action;

        if (action == '1') {
            std::string new_password;
            std::cout << "Ingrese su nueva contrasenia: ";
            std::cin >> new_password;
            user->password = new_password;
            std::cout << "Su contrasenia ha sido cambiada exitosamente." << std::endl;
        }
        else if (action == 'X' || action == 'x') {
            break;
        }
        else {
            std::cout << "Opcion invalida. Intente de nuevo." << std::endl;
        }
    }

}

User* findUser(std::vector<User*>& users, std::string& username, std::string& password) {
    for (auto& user : users) {
        if (user->username == username && user->password == password) {
            return user;
        }
    }
    return nullptr;
}

int main()
{
    std::vector<User*> users;
    int login_attempts = 0;
    User* currentUser = nullptr;
    bool user_found = false;

    User* user1 = new User;
    user1->username = "a";
    user1->password = "a";

    User* user2 = new User;
    user2->username = "aridunicorn";
    user2->password = "password";

    users.push_back(user1);
    users.push_back(user2);

    while (login_attempts < 3)
    {
        std::string login_attempt_username;
        std::string login_attempt_password;

        std::cout << "Ingrese su usuario: ";
        std::cin >> login_attempt_username;

        std::cout << "Ingrese su contrasenia: ";
        std::cin >> login_attempt_password;

        User* get_user = findUser(users, login_attempt_username, login_attempt_password);

        if (get_user)
        {
            displayMenu(get_user);
        }
        else
        {
            login_attempts++;
            std::cout << "Usuario y/o contrasenia incorrecta." << std::endl;
        }
    }

    if (login_attempts >= 3)
    {
        user_found = false;
        std::cout << "Usuario bloqueado. Contacte al administrador." << std::endl;
    }
    
    for (auto user : users) {
        delete user;
    }

    return 0;
}
