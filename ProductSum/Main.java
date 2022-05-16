class Main {
    public static void main(String[] args) {
        int n1 =35;
        int n2 = 6798;
        int res = sumOfProductOfDigits(n1, n2);
        System.out.println(res);
    }

    public static int sumOfProductOfDigits(int n1, int n2) {
        int res = 0;
        if (n1 == 0 || n2 == 0) {
            return 0;
        }
        while (n1 > 0 || n2 > 0) {
            int rem1 = n1 % 10;
            int rem2 = n2 % 10;
            res += rem1 * rem2;
            n1 = n1 / 10;
            n2 = n2 / 10;
        }
        return res;
    }
}