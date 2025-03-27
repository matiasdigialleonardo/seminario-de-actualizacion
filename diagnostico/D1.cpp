#include <iostream>
#include <vector>

struct User {
    std::string username;
    std::string password;
};

int main()
{
    std::vector<User> users;
    int login_attempts = 0;
    bool user_logged_in = false;
    User currentUser;

    User user1;
    user1.username = "restlesscoyote";
    user1.password = "password";

    User user2;
    user2.username = "aridunicorn";
    user2.password = "password";

    users.push_back(user1);
    users.push_back(user2);

    while (login_attempts < 3 && !user_logged_in)
    {
        std::string login_attempt_username;
        std::string login_attempt_password;

        std::cout << "Ingrese su usuario: ";
        std::cin >> login_attempt_username;

        std::cout << "Ingrese su contrasenia: ";
        std::cin >> login_attempt_password;

        for (auto& user : users)
        {
            if (user.username == login_attempt_username && user.password == login_attempt_password)
            {
                currentUser = user;
                user_logged_in = true;
            }
        }

        if (!user_logged_in)
        {
            login_attempts++;
            std::cout << "Usuario y/o contrasenia incorrecta." << std::endl;
        }
    }

    if (user_logged_in)
    {
        std::cout << "Bienvenido/a " << currentUser.username << "!";
    }
    else
    {
        std::cout << "Usuario bloqueado. Contacte al administrador.";
    }
    
    return 0;
}
