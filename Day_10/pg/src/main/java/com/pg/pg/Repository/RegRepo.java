package com.pg.pg.Repository;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pg.pg.Entity.Register;


@EnableAutoConfiguration
@EntityScan(basePackages="com.pg.pg.Entity")
public interface RegRepo extends JpaRepository<Register,Integer> {
    
}
