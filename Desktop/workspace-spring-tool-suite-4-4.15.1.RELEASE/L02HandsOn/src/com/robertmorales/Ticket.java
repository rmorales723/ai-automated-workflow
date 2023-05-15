package com.robertmorales;

public class Ticket
{	
	
	public String printTicket(boolean isStudent, int age)
	{
		int cost = 0;
		
		if(age>=65)
		{
			return "cost = $7";
		}
		
		if(isStudent)
		{
			return "cost = $8";
		}
		
		if(age<=12)
		{
			System.out.println("cost = $9");
			return "";
		}
		
		else
		{
			System.out.println("cost = $10");
			return "";
		}
	}
}
