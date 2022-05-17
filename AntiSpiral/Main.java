import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int [][] mat = new int[N][N];
		for(int i=0; i<mat.length; i++){
			for(int j=0; j<mat[0].length; j++){
				mat[i][j] = sc.nextInt();
			}
		}
		int [] result = antiSpiral(mat);
		for(int i=0; i<result.length; i++){
			System.out.print(result[i]+" ");
		}
	}
	public static  int[] antiSpiral(int [][]mat){
		int []res = new int[mat.length*mat[0].length];
		int top=0;
		int buttom = mat.length-1;
		int left = 0;
		int right = mat[0].length-1;
		int i=0;
		while(i<res.length){
			for(int j=top; j<=buttom && i<res.length;j++){
				res[i] = mat[j][left];
				i++;
			}
			left++;
			for(int j=left; j<=right && i<res.length; j++){
				res[i] = mat[buttom][j];
				i++;
			}
			buttom--;
			for(int j=buttom; j>=top && i<res.length; j--){
				res[i] = mat[j][right];
				i++;
			}
			right--;
			for(int j=right; j>=left && i<res.length; j--){
				res[i] = mat[top][j];
				i++;
			}
			top++;
		}
		return res;
	}
}