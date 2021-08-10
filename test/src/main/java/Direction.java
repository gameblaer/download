import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public class Direction {

    private String word;
    private String[] synonyms;
    private String key;
    private String pos;

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String[] getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(String[] synonyms) {
        this.synonyms = synonyms;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public Direction(String word, String key, String pos, String[] synonyms) {
        this.word = word.toLowerCase();
        this.synonyms = synonyms;
        this.key = key.toLowerCase();
        this.pos = pos.toLowerCase();
    }
}