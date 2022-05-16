class Main{
    public static void main(String[] args) {
        int n=5;
        pattern_making(n);
    }
    public static void pattern_making(int n){
        int j;
        int l;
        for(int i=1; i<=n; i++){
            for(j=1; j<=i; j++){
                System.out.print(j+" ");
            }
            for(int k=j-2; k>=1; k--){
                System.out.print(k+" ");
            }
            System.out.println();
        }
        for(int i=n-1; i>=1;i--){
            for(l=1; l<=i; l++){
                System.out.print(l+" ");
            }
            for(int k=l-2; k>=1; k--){
                System.out.print(k+" ");
            }
            System.out.println();
        }
    }
}