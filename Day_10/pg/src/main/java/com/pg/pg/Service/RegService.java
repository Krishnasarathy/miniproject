package com.pg.pg.Service;
import com.pg.pg.Entity.Register;
import com.pg.pg.Repository.RegRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service

public class RegService {
@Autowired
private RegRepo repository ;
    public List<Register> getAllRegs() {
        return repository.findAll();
    }

    public Register getRegisterbyId(Integer id) {
        return repository.findById(id).get();
    }

   public Register saveRegister(Register reg){
    return repository.save(reg);
   }

    public Register updateRegister(Integer id, Register register) {
        Register reg =repository.findById(id).get();
        reg.setF_name(register.getF_name());
        reg.setL_name(register.getL_name());
        reg.setEmail(register.getEmail());
        reg.setPassword(register.getPassword());
        return repository.save(reg);
        
    }

    public boolean deleteRegister(Integer id) {
        if(repository.findById(id).isPresent()){
            repository.deleteById(id);
            return true;
        }
        return false;
    }
    
}
