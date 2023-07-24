package com.pg.pg.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Register {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String f_name;
private String l_name;
private String email;
private String password;
}
