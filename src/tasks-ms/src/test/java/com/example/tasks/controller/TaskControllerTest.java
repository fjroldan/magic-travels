package com.example.tasks.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.example.tasks.entity.Task;
import com.example.tasks.service.TaskService;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class TaskControllerTest {

    @Mock
    private TaskService taskservice;

    @InjectMocks
    private TaskController taskController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAlltasks() {
        Task task1 = new Task();
        task1.setId(1L);
        task1.setTaskName("Task 1");
        Task task2 = new Task();
        task2.setId(2L);
        task2.setTaskName("Task 2");
        List<Task> tasks = Arrays.asList(task1, task2);
        when(taskservice.getAllTasks()).thenReturn(tasks);
        List<Task> result = taskController.getAllTasks();
        assertEquals(2, result.size());
        assertEquals("Task 1", result.get(0).getTaskName());
        assertEquals("Task 2", result.get(1).getTaskName());
    }

    @Test
    public void testGetTaskById() {
        Task task = new Task();
        task.setId(1L);
        task.setTaskName("Task Name");
        when(taskservice.getTaskById(1L)).thenReturn(Optional.of(task));
        ResponseEntity<Task> response = taskController.getTaskById(1L);
        assertEquals("200 OK", response.getStatusCode().toString());
        assertEquals("Task Name", response.getBody().getTaskName());
    }

    @Test
    public void testGetTaskById_NotFound() {
        when(taskservice.getTaskById(1L)).thenReturn(Optional.empty());
        ResponseEntity<Task> response = taskController.getTaskById(1L);
        assertEquals("404 NOT_FOUND", response.getStatusCode().toString());
    }

    @Test
    public void testCreateTask() {
        Task task = new Task();
        task.setId(1L);
        task.setTaskName("Task Name");
        when(taskservice.createTask(task)).thenReturn(task);
        Task result = taskController.createTask(task);
        assertEquals("Task Name", result.getTaskName());
    }
}