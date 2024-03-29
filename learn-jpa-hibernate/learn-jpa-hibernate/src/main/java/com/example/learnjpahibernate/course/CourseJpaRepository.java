package com.example.learnjpahibernate.course;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class CourseJpaRepository {
    @PersistenceContext
    private EntityManager entityManager;

    public void insert(Course course){
        entityManager.merge(course);
    }

    public Course findbyId(long id){
        return entityManager.find(Course.class, id);
    }

    public void deletebyId(long id){
        Course course = entityManager.find(Course.class, id);
        entityManager.remove(course);
    }
}
