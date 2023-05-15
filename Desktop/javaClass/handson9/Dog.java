package com.rorbertmorales.handson9;

public class Dog extends Animal
{
	public Dog() {
        super(new Animal.AnimalBuilder("dog", 2, 2, 2));
    }
}
