package casca.upf.com.homeautomation;

import android.app.Application;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

/**
 * Created by fabricio on 18/10/2016.
 */

public class ControlLifeCicleApp extends Application {

    public static DatabaseReference ref;

    @Override
    public void onCreate() {
        //quando ele entra aqui, iniciou o ciclo de vida da aplicação toda e não só da tela
        super.onCreate();

        //referencia pro path do banco

        FirebaseDatabase database = FirebaseDatabase.getInstance();
        ref = database.getReference("sensor");
        //pega o path tod mais o sensor que esta dentro da raiz

    }
}
