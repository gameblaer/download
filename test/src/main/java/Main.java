
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
        //choose file: true or false, true little, false big
        if (false) arrIn = MyFile.reading("src\\test\\example.in", false);
        else arrIn = MyFile.reading("src\\test\\example_big.in", false);

        int maxReapetBlocks = 0;
        try {
            maxReapetBlocks = Integer.parseInt(arrIn[0].trim());
        } catch (Exception ignored) {
        }
        int line = 1;
        for (int i = 0; i < maxReapetBlocks; i++) {

            int maxLineBlocks = 0;

            if (arrIn[line].split(" ").length <= 1) {
                try {
                    maxLineBlocks = Integer.parseInt(arrIn[line++].trim());
                } catch (Exception ignored) {
                }
            }

            for (int j = line, max = maxLineBlocks + line; j < max; j++, line++) {
                String word = arrIn[j].split(" ")[0].trim().toLowerCase();
                String synonym = arrIn[j].split(" ")[1].trim().toLowerCase();
                boolean result = false;

                if (!word.equals(synonym)) {
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
                    result = true;
                }

                if (result) System.out.println("synonyms " + word + " == " + synonym);
                else System.out.println("different " + word + " != " + synonym);
            }
        }
    }
}
