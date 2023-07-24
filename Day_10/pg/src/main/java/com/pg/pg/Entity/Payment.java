package com.pg.pg.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Payment {
@Id
private int Id;
private int Card_number;
private int Amountpaid;

public Payment(int Card_number,int Amountpaid){
    this.Card_number=Card_number;
    this.Amountpaid=Amountpaid;
}


public int getId() {
    return Id;
}
public void setId(int id) {
    Id = id;
}
public int getCard_number() {
    return Card_number;
}
public void setCard_number(int card_number) {
    Card_number = card_number;
}
public int getAmount() {
    return Amountpaid;
}
public void setAmount(int amount) {
    Amountpaid = amount;
}

}
