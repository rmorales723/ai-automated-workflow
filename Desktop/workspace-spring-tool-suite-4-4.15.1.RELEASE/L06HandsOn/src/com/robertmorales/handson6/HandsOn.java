package com.robertmorales.handson6;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedReader;

public class HandsOn
{

	public static void main(String[] args) throws Exception
	{
		// TODO Auto-generated method stub
		String songs[]= {"Rock with You","Smooth Criminal","Wanna Be Starin' Something","Thriller","Beat It"};
		StringBuffer sbf = new StringBuffer();
		
		if  (songs.length == 0)
	      {
	        throw new Exception("Error when writing songs.txt.");
	      }
	      
	       
	    
		for(int i=0;i<songs.length;i++)
			sbf.append(songs[i].toString()+"\n");
	     
		
		try
			{
				FileWriter bwr = new FileWriter("songs.txt");
				//write 
				bwr.write(sbf.toString());
				//flush stream
				bwr.flush();
				//close stream
				bwr.close();
			}
				catch(Exception e)
			{
				e.printStackTrace();
			}

				System.out.println("Content of the File\n*********************\n");
				// reading 
		try
			{
				BufferedReader br = new BufferedReader(new FileReader("songs.txt"));
				String line;
			while ((line = br.readLine()) != null)
					System.out.println(line);
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
		}
	}