 class QuickSort {
    
    public static int partition(int arry[], int low, int high) {
        int pivot = arry[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arry[j] < pivot) {
                i++;

                // swap
                int temp = arry[i];
                arry[i] = arry[j];
                arry[j] = temp;
            }
        }

        i++;
        int temp = arry[i];
        arry[i] = pivot;
        arry[high] = temp;
        return 1;
    }

    public static void quickSort(int arry[], int low, int high) {
        if (low < high) {
            int pividx = partition(arry, low, high);

            quickSort(arry, low, pividx-1);
            quickSort(arry, pividx+1, high);
        }
    }
             
    public static void main(String args[]) {
        int arry[] = { 6, 3, 9, 5, 2, 8 };
        int n = arry.length;

        quickSort(arry, 0, n - 1);

        // print
        for (int i = 0; i < n; i++) {
            System.out.println(arry[i] + " ");
        }
        System.out.println();
    }
}
