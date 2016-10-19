package casca.upf.com.homeautomation;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.ValueEventListener;

public class MainActivity extends AppCompatActivity {
    private ImageView imgLamp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        imgLamp = (ImageView) findViewById(R.id.imgLamp);


        ControlLifeCicleApp.ref.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                if(dataSnapshot.getChildrenCount()>0){
                    for(DataSnapshot data : dataSnapshot.getChildren()){
                        float lightValue = Integer.parseInt(""+data.getValue());
                            if (lightValue > 0.10){
                                imgLamp.setImageResource(R.drawable.lamp_on);
                            }else{
                                imgLamp.setImageResource(R.drawable.lamp_off);
                            }
                    }
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });
    }
}
