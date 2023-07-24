package com.pg.pg.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Application {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
public int getId() {
    return id;
}






public void setId(int id) {
    id = id;
}
private String Name;
private String Father_name;
private String Mother_name;
private int Dob;
private String Ugname;
private String Iname;
private int Anumber;
private int mobile;
private int Amoblie;
private String M10;
private String M12;
private String UGM;

public Application(int Id,String Name,String Father_name,String Mother_name,int Dob,String Ugname,String Iname, int Anumber,int mobile,int Amoblie,String M10,String M12,String UGM ){
    this.id=id;
    this.Name=Name;
    this.Father_name=Father_name;
    this.Mother_name=Mother_name;
    this.Dob=Dob;
    this.Ugname=Ugname;
    this.Iname=Iname;
    this.Anumber=Anumber;
    this.mobile=mobile;
    this.Amoblie=Amoblie;
    this.M10=M10;
    this.M12=M12;
    this.UGM=UGM;
}






public String getName() {
    return Name;
}
public void setName(String name) {
    Name = name;
}
public String getFather_name() {
    return Father_name;
}
public void setFather_name(String father_name) {
    Father_name = father_name;
}
public String getMother_name() {
    return Mother_name;
}
public void setMother_name(String mother_name) {
    Mother_name = mother_name;
}
public int getDob() {
    return Dob;
}
public void setDob(int dob) {
    Dob = dob;
}
public String getUgname() {
    return Ugname;
}
public void setUgname(String ugname) {
    Ugname = ugname;
}
public String getIname() {
    return Iname;
}
public void setIname(String iname) {
    Iname = iname;
}
public int getAnumber() {
    return Anumber;
}
public void setAnumber(int anumber) {
    Anumber = anumber;
}
public int getMobile() {
    return mobile;
}
public void setMobile(int mobile) {
    this.mobile = mobile;
}
public int getAmoblie() {
    return Amoblie;
}
public void setAmoblie(int amoblie) {
    Amoblie = amoblie;
}
public String getM10() {
    return M10;
}
public void setM10(String m10) {
    M10 = m10;
}
public String getM12() {
    return M12;
}
public void setM12(String m12) {
    M12 = m12;
}
public String getUGM() {
    return UGM;
}
public void setUGM(String uGM) {
    UGM = uGM;
}


}
