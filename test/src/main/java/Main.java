
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.IOException;


public class Main {

    public static void main(String[] args) throws IOException {

        String[] objs = MyFile.reading("src\\main\\synonyms.json", false);

        Gson gson = new GsonBuilder().setLenient().create();
        Direction[] direction = new Direction[objs.length];

        for (int i = 0; i < objs.length; i++) {
            direction[i] = gson.fromJson(objs[i], Direction.class);
        }

        String[] arrIn;
        if(false) arrIn = MyFile.reading("src\\test\\example.in", false);
        else arrIn = MyFile.reading("src\\test\\example_big.in", false);

        int maxReapetBlocks=0;
        try {
            maxReapetBlocks = Integer.parseInt(arrIn[0]);
        } catch (Exception ignored) { }
        int countEndBlocks=0;
        int countLineFile=0;
        int maxLineBlock = 0;

        for (int i = 1; i < arrIn.length; i++) {

            if (maxLineBlock <= countLineFile++){
                countLineFile=0;
            }

            if(arrIn[i].split(" ").length <= 1){
                try {
                    maxLineBlock = Integer.parseInt(arrIn[i].trim());
                    if(maxReapetBlocks <= countEndBlocks++) {
                        break;
                    }
                    continue;
                } catch (Exception ignored) { }
            }

            String word = arrIn[i].split(" ")[0].trim().toLowerCase();
            String synonym = arrIn[i].split(" ")[1].trim().toLowerCase();
            boolean result = false;

            if(!word.equals(synonym)) {
                forEnd1:
                for (Direction value : direction) {
                    if (!value.getWord().equals(word)) continue;

                    for (String arr : value.getSynonyms()) {
                        if (synonym.equals(arr.toLowerCase())) {
                            result = true;
                            break forEnd1;
                        }
                    }
                }
            } else {
                result=true;
            }

            if (result) System.out.println("synonyms "+ word + " == " + synonym);
            else System.out.println("different "+ word + " != " + synonym);
        }
    }
}
