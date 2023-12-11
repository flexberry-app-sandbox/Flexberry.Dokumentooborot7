package Dokumentooborot7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dokumentooborot7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ДокументСох
 */
@Entity(name = "IISDokumentooborot7ДокументСох")
@Table(schema = "public", name = "ДокументСох")
public class DokumentSox {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаСохранения")
    private Date датасохранения;

    @OneToMany(mappedBy = "dokumentsox", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHUtverzhDok> tchutverzhdoks;

    @OneToMany(mappedBy = "dokumentsox", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHSozdDok> tchsozddoks;


    public DokumentSox() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаСохранения() {
      return датасохранения;
    }

    public void setДатаСохранения(Date датасохранения) {
      this.датасохранения = датасохранения;
    }


}