package com.pg.pg.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pg.pg.Entity.Register;
import com.pg.pg.Service.RegService;

@CrossOrigin
@RestController
public class RegCont {
@Autowired
RegService regService;
@GetMapping("/get")
public List<Register> getAllrRegisters(){
    return this.regService.getAllRegs();
}
@GetMapping("/{id}")
public Register getRegisterbyId(@PathVariable Integer id){
    return regService.getRegisterbyId(id);

}
@PostMapping("/post")
public Register createRegister(@RequestBody Register reg) {
return regService.saveRegister(reg);
}
@PutMapping("/{id}")
public Register updateRegister( @RequestBody Register reg,@PathVariable Integer id) 
{
return regService.updateRegister(id, reg);
}
@DeleteMapping("/{id}")
public boolean deleteRegister(@PathVariable Integer id) {
return regService.deleteRegister(id);
}


}
