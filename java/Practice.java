import java.util.jar.Attributes.Name;

public class Practice {
    public static void main(String[] args) throws Exception {
        int n = 5;
        for (int i = 0; i <= n; i++) {
            for (int k = n; k >= i; k--) {
                System.out.print(" ");
            }
            for (int j = 0; j < i; j++) {
                System.out.print(" " + i);
            }
            System.out.println();

        }

        // String name = "Vivek";
        // String reverseName = "";
        // for (int i = name.length() - 1; i >= 0; i--) {
        // reverseName += name.charAt(i);
        // }
        // System.out.println(reverseName);

    }
}
