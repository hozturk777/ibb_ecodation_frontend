import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {   
                translations: {
                    'homepage': "Home Page",
                    'about': "About",
                    'blog': "Blog",
                    'hello': "Hello there!",
                    'blog_create': "Blog Create",
                    'blog_update': "Blog Update",
                    'blog_delete': "Blog Delete",
                    'blog_list': "Blog List",
                    'blog_id': "ID",
                    'blog_header': "Blog Header",
                    'blog_content': "Blog Content",
                    'date': "Date",
                    'update': "Update",
                    "view": 'View',
                    "delete": 'Delete',
                    "genre": 'Genre',
                    "book": 'Book',
                    "pageCount": 'Page Count',
                    "author": 'Author'
                }
            },
        tr:
            {
                translations: {
                    'homepage': "Ana Sayfa",
                    'about': "Hakkımızda",
                    'blog': "Blog",
                    'hello': "Merhabalar!",
                    'blog_create': "Blog Ekle",
                    'blog_update': "Blog Güncelle",
                    'blog_delete': "Blog Sil",
                    'blog_list': "Blog Listele",
                    'blog_id': "ID",
                    'blog_header': "Blog Başlık",
                    'blog_content': "Blog İçerik",
                    'date': "Tarih",
                    'update': "Güncelle",
                    "view": 'Göster',
                    "delete": 'Sil',
                    "genre": 'Tür',
                    "book": 'Kitap',
                    "pageCount": 'Kitap Sayfası',
                    "author": 'Yazar'
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;