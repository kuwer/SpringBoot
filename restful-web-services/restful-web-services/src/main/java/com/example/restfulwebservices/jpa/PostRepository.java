package com.example.restfulwebservices.jpa;

import com.example.restfulwebservices.user.Post;
import com.example.restfulwebservices.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
