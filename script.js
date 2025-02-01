
            const baseUrls = {
               "عبدالرحمن العوسي": "https://server6.mp3quran.net/aloosi/",
                "عبدالرحمن السديس": "https://server6.mp3quran.net/akdr/",
                "مشاري راشد العفاسي": "https://server8.mp3quran.net/afs/",
                "سعد الغامدي": "https://server7.mp3quran.net/s_gmd/",
                "ماهر المعيقلي": "https://server12.mp3quran.net/maher/",
                "ياسر الدوسري": "https://server11.mp3quran.net/yasser/",
                "أحمد العجمي": "https://server10.mp3quran.net/ajm/",
                "ناصر القطامي": "https://server6.mp3quran.net/qtm/",
                "عمر القزابري": "https://server9.mp3quran.net/omar_warsh/",
                "محمد صديق المنشاوي": "https://server10.mp3quran.net/minsh/",
                "عبد الباسط عبد الصمد": "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/",
                "إسلام صبحي": "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/",
                "فارس عباد": "https://server8.mp3quran.net/frs_a/",
                "خالد الجليل": "https://server10.mp3quran.net/jleel/",
                "وديع اليمني": "https://server6.mp3quran.net/wdee3/",
                "هزاع البلوشي":"https://server11.mp3quran.net/hazza/",
                "رعد محمد الكردي": "https://server6.mp3quran.net/kurdi/",
            };
    
            const songUrls = {
                "أضفيت": "https://archive.org/download/islamino.net__Machari_Thekryat/14_Thekryat.mp3",
                "اذا ما قال لي ربي": "https://cdn1.esm3.com/music/7754/m277831.mp3",
                "هل لك سر عند اللَّه": "https://cdn1.esm3.com/music/807/m274464.mp3",
                "سأقبل يا خالقي من جديد": "https://ia601308.us.archive.org/2/items/Anasheed_Dorarr.blogspot.com/saoqbilo-islam-sobhi.mp3",
                "ليس الغريب": "https://cdn1.esm3.com/music/4881/esm3.com.65450.mp3",
                "سبع طوال": "assets/8e8IpNZVIRQ (1).mp3",
                "كنت ميتا":"assets/mEt7OjeVZos (2).mp3",
                "جمال الوجود": "assets/JDu8FBWhMQM.mp3",
                "يا منزل القرآن": "assets/utMa9xkNJU0.mp3",
                "العشرة المبشرون بالجنة": "assets/VwGcDf_2d_k.mp3",
                "كشوق اليالي": "assets/MluY7b4VzUE.mp3",
                "أنا العبد": "https://cdn1.esm3.com/music/807/Al3fasy_qalby-alsagher-ana-al3abd.mp3",
                "ما أعدلك": "assets/lcKVQCRSeiY.mp3",
                
            };
    
            let selectedSourate = null;
            let selectedReciter = null;
    
            function toggleDropdown(dropdownId) {
                const dropdown = document.getElementById(dropdownId);
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
    
            function selectSourate(button, sourateName) {
                const buttons = document.querySelectorAll('#sourates-list button');
                const isSelected = button.classList.contains('selected');
    
                buttons.forEach(btn => {
                    if (btn !== button) {
                        btn.style.display = isSelected ? 'block' : 'none';
                    }
                    btn.classList.remove('selected');
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                });
    
                if (!isSelected) {
                    button.classList.add('selected');
                    button.style.backgroundColor = '#555';
                    button.style.color = '#fff';
                    selectedSourate = sourateName;
                    playAudio();
                } else {
                    selectedSourate = null;
                }
            }
    
            function selectReciter(button, reciterName) {
                const buttons = document.querySelectorAll('#reciters-dropdown button');
                const isSelected = button.classList.contains('selected');
    
                buttons.forEach(btn => {
                    if (btn !== button) {
                        btn.style.display = isSelected ? 'block' : 'none';
                    }
                    btn.classList.remove('selected');
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                });
    
                if (!isSelected) {
                    button.classList.add('selected');
                    button.style.backgroundColor = '#555';
                    button.style.color = '#fff';
                    selectedReciter = reciterName;
                    playAudio();
                } else {
                    selectedReciter = null;
                }
            }
    
            function selectSong(button, songName) {
                const buttons = document.querySelectorAll('#songs-dropdown button');
                const isSelected = button.classList.contains('selected');
    
                buttons.forEach(btn => {
                    if (btn !== button) {
                        btn.style.display = isSelected ? 'block' : 'none';
                    }
                    btn.classList.remove('selected');
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                });
    
                if (!isSelected) {
                    button.classList.add('selected');
                    button.style.backgroundColor = '#555';
                    button.style.color = '#fff';
                    const audioPlayer = document.getElementById('audio-player');
                    const audioSource = document.getElementById('audioSource');
                    audioSource.src = songUrls[songName];
                    audioPlayer.load();
                    audioPlayer.play();
                }
            }
    
            function playAudio() {
                if (selectedSourate && selectedReciter) {
                    const audioSrc = baseUrls[selectedReciter] + selectedSourate + ".mp3";
                    const audioPlayer = document.getElementById('audio-player');
                    const audioSource = document.getElementById('audioSource');
                    audioSource.src = audioSrc;
                    audioPlayer.load();
                    audioPlayer.play();
                }
            }
    
            function searchSourates() {
                const searchInput = document.getElementById('search-sourates').value.trim();
                const buttons = document.querySelectorAll('#sourates-list button');
    
                buttons.forEach(button => {
                    const text = button.textContent;
                    if (text.includes(searchInput)) {
                        button.style.display = 'block';
                    } else {
                        button.style.display = 'none';
                    }
                });
            }
    
            let replayCount = 0;
    
            function replayAudio() {
                const audioPlayer = document.getElementById('audio-player');
                replayCount = (replayCount + 1) % 3; // cycles through 0, 1, 2
                audioPlayer.currentTime = 0;
                audioPlayer.play();
                if (replayCount === 1) {
                    audioPlayer.loop = true;
                } else if (replayCount === 2) {
                    audioPlayer.loop = false;
                    audioPlayer.addEventListener('ended', function replayTwice() {
                        audioPlayer.currentTime = 0;
                        audioPlayer.play();
                        audioPlayer.removeEventListener('ended', replayTwice);
                    });
                } else {
                    audioPlayer.loop = false;
                }
            }
    
            function toggleDayNightMode() {
                const body = document.body;
                const dayNightIcon = document.getElementById('day-night-icon');
                body.classList.toggle('dark-theme');
                if (body.classList.contains('dark-theme')) {
                    dayNightIcon.className = 'fas fa-moon';
                } else {
                    dayNightIcon.className = 'fas fa-sun';
                }
    
                // Ensure Surah list changes in dark mode
                const souratesListButtons = document.querySelectorAll('.sourates-list button');
                souratesListButtons.forEach(button => {
                    if (body.classList.contains('dark-theme')) {
                        button.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                        button.style.color = '#ffffff';
                    } else {
                        button.style.backgroundColor = '#b0b0b0';
                        button.style.color = '#151212';
                    }
                });
            }
    
            document.addEventListener('DOMContentLoaded', () => {
                function updateBatteryStatus(battery) {
                    const batteryLevel = document.querySelector('.battery-level');
                    batteryLevel.textContent = `${Math.round(battery.level * 100)}%`;
                    const batteryIcon = document.querySelector('.battery-icon i');
    
                    if (battery.level > 0.75) {
                        batteryIcon.className = "fas fa-battery-full";
                    } else if (battery.level > 0.5) {
                        batteryIcon.className = "fas fa-battery-three-quarters";
                    } else if (battery.level > 0.25) {
                        batteryIcon.className = "fas fa-battery-half";
                    } else if (battery.level > 0.1) {
                        batteryIcon.className = "fas fa-battery-quarter";
                    } else {
                        batteryIcon.className = "fas fa-battery-empty";
                    }
                }
    
                if (navigator.getBattery) {
                    navigator.getBattery().then(battery => {
                        updateBatteryStatus(battery);
                        battery.addEventListener('levelchange', () => updateBatteryStatus(battery));
                    });
                } else {
                    console.error('L\'API Battery Status n\'est pas supportée dans ce navigateur.');
                }
    
                function updateTime() {
                    const currentTime = new Date();
                    const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Casablanca' };
                    const timeFormatter = new Intl.DateTimeFormat('fr-MA', options);
                    document.querySelector('.current-time').textContent = timeFormatter.format(currentTime);
                }
    
                setInterval(updateTime, 1000);
                updateTime();
            });
    
            function toggleDropdown(dropdownId) {
                const dropdown = document.getElementById(dropdownId);
                dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
            }
    
            function searchSourates() {
                const searchInput = document.getElementById('search-sourates').value.trim();
                const buttons = document.querySelectorAll('#sourates-list button');
    
                buttons.forEach(button => {
                    const text = button.textContent;
                    button.style.display = text.includes(searchInput) ? 'block' : 'none';
                });
            }
