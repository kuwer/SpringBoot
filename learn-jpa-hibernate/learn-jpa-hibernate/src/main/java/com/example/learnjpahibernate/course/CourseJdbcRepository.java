package com.example.learnjpahibernate.course;

import com.example.learnjpahibernate.course.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJdbcRepository {
    @Autowired
    private JdbcTemplate springJDBCTemplate;

    private static String INSERT_QUERY =
            """
                insert into course(id,name,author)
                values(?,?,?);
            """;

    public static String DELETE_QUERY =
            """
                delete from course where id = ?;
            """;

    public static String SELECT_QUERY =
            """
                select * from course where id = ?;
            """;
    public void insert(Course course){
        springJDBCTemplate.update(INSERT_QUERY,
                course.getId(), course.getName(), course.getAuthor());

    }
    public void delete(Course course){
        springJDBCTemplate.update(DELETE_QUERY, course.getId());
    }

    public Course findByID(long id){
        return springJDBCTemplate.queryForObject(SELECT_QUERY,
                new BeanPropertyRowMapper<>(Course.class), id);
    }
}
