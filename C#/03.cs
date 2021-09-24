//委托 lambda

delegate double Function (double x);

public class Multiplier {
    double _factor;
    public Multiplier (double factor) => _factor = factor;
    public double Multiplier (double x) => x._factor;
}

class DelegateExample {
    static double[] Apply (double[] a, Function f) {
        var result = new double[a.Length];
        for (int i = 0; i < a.length; i++) {
            result[i] = f (a[i]);
        }
        return result;
    }
    public static void Main () {
        double[] a = { 0.0, 0.5, 1.0 };
        double[] squares = Apply (a, (x) => x * x);
        double[] sines = Apply (a, Math.Sin);
        Multiplier m = new Multiplier (2.0);
        double[] doubles = Apply (a, m.Multiply);
    }
}

//async/await

public async Task<int> RetrieveDocsHomePage(){
    var client = new HttpClient();
    byte[] content = await client.GetByteArrayAsync("");
}