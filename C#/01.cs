//类型................

//类
public class Point {
    public int X { get; }
    public int Y { get; }

    Point (int x, int y) => (X, Y) = (x, y);
}

new Point (1, 2)

public class Pair<TFirst, TSecond> {
    public TFirst First { get; }
    public TSecond Second { get; }

    Pair (TFirst first, TSecond second) => (First, Second) = (first, second);
}
//基類

public class Point3D : Point {
    public int Z { get; set }

    Point3D (int x, int y, int z) : base (x, y) {
        Z = z;
    }
}

//结构
public struct PointStruct {
    public int X { get; }
    public int Y { get; }

    PointStruct (int x, int y) => (X, Y) = (x, y);
}

new PointStruct()

public interface IControl {
    void Paint();
}
interface ITextBox:IControl{

}

//可为null的类型
int? optionalInt= null;

//元组
(sum,count)t1 = (1,2)