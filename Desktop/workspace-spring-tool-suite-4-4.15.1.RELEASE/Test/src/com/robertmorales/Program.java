package com.robertmorales;

public class Program
{

	public static void main(String[] args)
	{
		// TODO Auto-generated method stub

	}

	public double getAverage(int[] numbers) 
    {
        double result = 0.0;
        if(numbers.length > 0) 
        {
            int index = 0;
            do 
            {
              result = result + numbers[index];
              
            }
            while (index<numbers.length);
            return result / numbers.length;
        }
          
        return result;
    }
	
}
