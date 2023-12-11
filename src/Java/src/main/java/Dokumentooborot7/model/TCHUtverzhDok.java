package Dokumentooborot7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dokumentooborot7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧУтвержДок
 */
@Entity(name = "IISDokumentooborot7ТЧУтвержДок")
@Table(schema = "public", name = "ТЧУтвержДок")
public class TCHUtverzhDok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "UtverzhdenieDok")
    @Convert("UtverzhdenieDok")
    @Column(name = "УтверждениеДок", length = 16, unique = true, nullable = false)
    private UUID _utverzhdeniedokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "UtverzhdenieDok", insertable = false, updatable = false)
    private UtverzhdenieDok utverzhdeniedok;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumentSox")
    @Convert("DokumentSox")
    @Column(name = "ДокументСох", length = 16, unique = true, nullable = false)
    private UUID _dokumentsoxid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumentSox", insertable = false, updatable = false)
    private DokumentSox dokumentsox;


    public TCHUtverzhDok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}