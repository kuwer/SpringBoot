package com.gettingStarted.learnspringboot;

public class Courses {
    private long id;
    private String name;
    private String author;

    public long getId() {
        return id;
    }

    public Courses(long id, String name, String author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }

    @Override
    public String toString() {
        return "Courses{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                '}';
    }


}
