package com.example.users.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.example.users.entity.User;
import com.example.users.service.UserService;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllUsers() {
        User user1 = new User();
        user1.setId(1L);
        user1.setUsername("John Doe");
        user1.setEmail("john@example.com");
        User user2 = new User();
        user2.setId(2L);
        user2.setUsername("Jane Doe");
        user2.setEmail("jane@example.com");
        List<User> users = Arrays.asList(user1, user2);
        when(userService.getAllUsers()).thenReturn(users);
        List<User> result = userController.getAllUsers();
        assertEquals(2, result.size());
        assertEquals("John Doe", result.get(0).getUsername());
        assertEquals("Jane Doe", result.get(1).getUsername());
    }

    @Test
    public void testGetUserById() {
        User user = new User();
        user.setId(1L);
        user.setUsername("John Doe");
        user.setEmail("john@example.com");
        when(userService.getUserById(1L)).thenReturn(Optional.of(user));
        ResponseEntity<User> response = userController.getUserById(1L);
        assertEquals("200 OK", response.getStatusCode().toString());
        assertEquals("John Doe", response.getBody().getUsername());
    }

    @Test
    public void testGetUserById_NotFound() {
        when(userService.getUserById(1L)).thenReturn(Optional.empty());
        ResponseEntity<User> response = userController.getUserById(1L);
        assertEquals("404 NOT_FOUND", response.getStatusCode().toString());
    }

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setId(1L);
        user.setUsername("John Doe");
        user.setEmail("john@example.com");
        when(userService.createUser(user)).thenReturn(user);
        User result = userController.createUser(user);
        assertEquals("John Doe", result.getUsername());
        assertEquals("john@example.com", result.getEmail());
    }
}