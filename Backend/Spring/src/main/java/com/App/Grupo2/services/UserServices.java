package com.App.Grupo2.services;

import java.util.List;
import java.util.Optional;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.App.Grupo2.models.User;
import com.App.Grupo2.models.UserLogin;
import com.App.Grupo2.repositories.UserRepository;

@Service
public class UserServices {

    private UserRepository userRepository;

    UserServices(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public Optional<User> oneById(int id) {
        return userRepository.findById(id);
    }

    public User addUser(User newUser) {
        return userRepository.saveAndFlush(newUser);
    }

    public int login(UserLogin login) {
        User user = userRepository.findByEmail(login.getEmail());
        if (user != null && user.getPass().equals(login.getPass())) {
            return user.getId();
        }
        return -1;
    }

    public String deleteUser(int id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return "Usuario eliminado";
        }
        return "Usuario no encontrado";
    }

    public User putUser(int id, User userToUpdate) {
        Optional<User> userTemp = this.oneById(id);
        if (userTemp.isPresent()) {
            User user = userTemp.get();
            user.setUserName(userToUpdate.getFirstName());
            user.setEmail(userToUpdate.getEmail());
            user.setImgUrl(userToUpdate.getImgUrl());
            user.setFirstName(userToUpdate.getFirstName());
            user.setLastName(userToUpdate.getLastName());
            user.setAge(userToUpdate.getAge());
            user.setDes(userToUpdate.getDes());
            user.setPhone(userToUpdate.getPhone());
            user.setAddress(userToUpdate.getAddress());
            return userRepository.save(user);
        }
        return null;
    }
}
