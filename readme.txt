
Fotbalový kvíz
Tento projekt je jednoduchá fotbalová kvízová hra postavená pomocí vanilla JavaScriptu, HTML a CSS. Hra náhodně vybírá otázky z předem definovaného seznamu, umožňuje uživatelům odpovídat na otázky, sleduje jejich skóre a zobrazuje konečný výsledek.

Funkce
Náhodný výběr otázek: Kvíz náhodně vybírá 5 otázek z předem definovaného seznamu.
Interaktivní uživatelské rozhraní: Uživatelé mohou vybírat odpovědi, přičemž kvíz ukáže, zda byly správné nebo špatné.
Sledování skóre: Hra sleduje skóre uživatele a aktualizuje na obrazovce tabulku skóre s barevnými ikonami fotbalových míčů.
Zobrazení konečného skóre: Po zodpovězení všech otázek hra zobrazí konečné skóre uživatele a zprávu, zda vyhrál nebo prohrál.
Jak spustit
Naklonujte si repozitář:
git clone https://github.com/paradnikos/Fotbal_kviz.git
Struktura projektu
index.html: Obsahuje strukturu webové stránky.
style.css: Obsahuje styly pro kvízovou hru.
script.js: Obsahuje JavaScriptový kód, který řídí kvízovou hru.
img/: Složka obsahující obrazové soubory pro ikony skóre.
Přehled logiky hry
Výběr otázek: Metoda getRandomQuestions() zamíchá původní seznam otázek a vybere 5 pro kvíz.
Výběr odpovědi: Když uživatel klikne na odpověď, metoda selectAnswer() zkontroluje, zda je správná, aktualizuje uživatelské rozhraní a sleduje skóre.
Zobrazení skóre: Metoda showScore() zobrazí konečné skóre a zprávu o výhře/prohře na základě výkonu uživatele.
Jak upravit
Přidání/upravení otázek:
Otázky lze upravit nebo přidat v poli questions v souboru script.js.
Každý objekt otázky by měl obsahovat řetězec question a pole answers, kde každá odpověď má vlastnosti text a correct.
Změna počtu otázek:

Počet otázek v každém kvízu lze změnit úpravou metody slice(0, 5) v getRandomQuestions() na požadovaný počet.