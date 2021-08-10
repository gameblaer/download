/**
 *
 * @author Vrták Martin
 */
import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class MyFile {

	/**
	 * Reading file
	 * @param fileName give filename
	 * @param consolePrint if you want answer set true
	 * @return String[]
	 */
	public static String[] reading(String fileName,boolean consolePrint) throws IOException {

		File file = new File(fileName);

		if (!file.exists()) {
			return new String[]{};
		}

		//read from file
		try {			
			BufferedReader br= new BufferedReader(new FileReader(fileName));
			String line;

			List <String> lines = new ArrayList<>();

			while((line=br.readLine())!=null) {
				lines.add(line);
				if(consolePrint) {
					System.out.println(line);
				}
			}

			br.close();		
			
			String[] arr = new String[lines.size()];
			lines.toArray(arr);

			return arr;
			
		} catch (Exception e) {
			System.out.println("Error: "+e);
		}
		return new String[]{};
	}

	/**
	 * add array + line to file
	 * @param arr array with lines, write to file
	 * @param line add line to end of the file
	 * @param fileName name file
	 */
	public static void write(String[] arr, String line,  String fileName) throws IOException {
		
		File subor= new File(fileName);
		
		//if file not exist, create file
		if(subor.createNewFile()) {	
			//System.out.println("File create\n");
		} else {
			//System.out.println("File exist\n");
		}

		try {
			BufferedWriter bw= new BufferedWriter(new FileWriter(subor));
			int i=0;
			for(String s : arr) {
				i++;
				bw.write(s);
				bw.newLine();
			}

			bw.write( (i++ + 1)+" "+line);
			bw.newLine();

			bw.close();			
			
		} catch (Exception e) {
			System.out.println("Error: "+e);
		} 		
	}
}
