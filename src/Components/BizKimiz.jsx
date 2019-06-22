import React from "react";

function BizKimiz() {
    return (
        <section className="biz-kimiz">
            <h2 className="biz-kimiz__main-header">Biz Kimiz?</h2>
            <p className="biz-kimiz__paragraph">
                Bizler eksicode.org çatısı altında sahip oldukları bilgi ve
                deneyimleri birbirleriyle paylaşan, farklı dallarda uzmanlaşmış,
                uzmanlaşamamış, uzmanlaşmak isteyen, yazılım sektörüne dahil
                olmuş veya sektöre girmek isteyen üyeler barındıran bir grup
                yazılımcıyız.
            </p>
            <hr className="biz-kimiz__hrule" />
            <h3 className="biz-kimiz__subhead">Kimler için çalışıyoruz?</h3>
            <p className="biz-kimiz__paragraph">
                Aciksecim.org olarak hiçbir siyasi partiyle fiziksel,
                metafiziksel, organik, inorganik hiçbir bağımız bulunmamaktadır.
                Hiçbir siyasi partiye sempati yada antipati duymuyor sadece
                “Acaba hangi parti daha önde şu anda?” şeklinde düşünen
                seçmenlerle empati kurarak seçimlerin daha da şeffaflaşması için
                çalışıyoruz.
            </p>
            <hr className="biz-kimiz__hrule" />
            <h3 className="biz-kimiz__subhead">Bu işten kazancımız ne?</h3>
            <p className="biz-kimiz__paragraph">
                Bu işten kazancımız elbette var. Manevi açıdan seçimlerin
                arkasında herhangi bir şaibenin olmadığına emin olarak rahatça
                uyumak tek kazancımız olacak.
            </p>
            <p className="biz-kimiz__paragraph biz-kimiz__paragraph--lp">
                Maddi açıdan ise proje ekibindeki herkes bu işten 1 kuruş bile
                kazanmayacağını bilerek gönüllü olarak çalışıyor.
            </p>
        </section>
    );
}

export default BizKimiz;
