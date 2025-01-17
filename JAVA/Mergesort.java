public class Mergesort {
    public static void conquer(int arry[], int si, int mid, int ei) {
        int merged[] = new int[ei - si + 1];

        int idx1 = si;
        int idx2 = mid + 1;
        int x = 0;

        while (idx1 <= mid && idx2 <= ei) {
            if (arry[idx1] <= arry[idx2]) {
                merged[x++] = arry[idx1++];
            } else {
                merged[x++] = arry[idx2++];
            }
        }

        while (idx1 <= mid) {
            merged[x++] = arry[idx1++];
        }

        while (idx2 <= ei) {
            merged[x++] = arry[idx2++];
        }

        for (int i = 0, j = si; i < merged.length; i++, j++) {
            arry[j] = merged[i];
        }
    }

    public static void divide(int arry[], int si, int ei) {
        if (si >= ei) {
            return;
        }
        int mid = si + (ei - si) / 2;
        divide(arry, si, mid);
        divide(arry, mid + 1, ei);
        conquer(arry, si, mid, ei);
    }

    public static void main(String args[]) {
        int arry[] = { 5, 3, 9, 8, 5, 8 };
        int n = arry.length;

        divide(arry, 0, n - 1);

        for (int i = 0; i < n; i++) {
            System.out.print(arry[i] + " ");
        }
        System.out.println();
    }
}