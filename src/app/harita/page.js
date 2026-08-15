'use client';

import { useEffect, useRef } from 'react';
import './harita.css';
    import Link from 'next/link';

export default function HaritaPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || root.dataset.mapInit === '1') return;
    root.dataset.mapInit = '1';

    const FLOORS = [
      {id:'floor-1', label:'-1. Kat'},
      {id:'zemin', label:'Zemin Kat'}
    ];

    const CATEGORIES = [
      {id:'market', label:'Market'},
      {id:'eglence', label:'Eğlence'},
      {id:'arac-kiralama', label:'Araç Kiralama'},
      {id:'ev-yasam', label:'Ev & Yaşam'},
      {id:'guzellik-bakim', label:'Güzellik & Bakım'},
      {id:'ayakkabi', label:'Ayakkabı'},
      {id:'giyim', label:'Giyim'},
      {id:'aksesuar', label:'Aksesuar'},
      {id:'magaza', label:'Mağaza'},
      {id:'yeme-icme', label:'Yeme-İçme'},
      {id:'spor', label:'Spor'},
      {id:'elektronik', label:'Elektronik'},
      {id:'telekom', label:'Telekomünikasyon'},
      {id:'evcil-hayvan', label:'Evcil Hayvan'},
      {id:'hizmet', label:'Hizmet'},
      {id:'diger', label:'Diğer'}
    ];

    const STORES = [
      // ---- -1. KAT ----
      {id:'migros', name:'Migros', category:'market', floor:'floor-1', units:['migros'], desc:'Süpermarket', link:'https://www.migros.com.tr'},
      {id:'petist', name:'Petist Pet Market', category:'evcil-hayvan', floor:'floor-1', units:['petist-pet-market'], desc:'Evcil hayvan ürünleri mağazası'},
      {id:'airport-bowling', name:'Airport Bowling', category:'eglence', floor:'floor-1', units:['airport-bowling'], desc:'Bowling ve eğlence merkezi'},
      {id:'gameport', name:'Gameport', category:'eglence', floor:'floor-1', units:['gameport','gameport-mini'], desc:'Oyun ve eğlence merkezi'},
      {id:'poligun', name:'Poligun', category:'eglence', floor:'floor-1', units:['poligun'], desc:'Atış poligonu / eğlence alanı'},
      {id:'avec', name:'Avec Rent A Car', category:'arac-kiralama', floor:'floor-1', units:['avec-rent-a-car','avec-rent-a-car-connector'], desc:'Araç kiralama ofisi'},
      {id:'york', name:'York Rent A Car', category:'arac-kiralama', floor:'floor-1', units:['york-rent-a-car','york-rent-a-car-connector'], desc:'Araç kiralama ofisi'},
      {id:'europcar', name:'Europcar', category:'arac-kiralama', floor:'floor-1', units:['europcar'], desc:'Araç kiralama ofisi', link:'https://www.europcar.com.tr'},
      {id:'tedi', name:'Tedi', category:'ev-yasam', floor:'floor-1', units:['tedi'], desc:'Ev ve yaşam ürünleri mağazası'},
      {id:'puffy', name:'Puffy Yataş', category:'ev-yasam', floor:'floor-1', units:['puffy-yatas'], desc:'Yatak ve mobilya mağazası', link:'https://www.yatas.com.tr'},
      {id:'yelva', name:'Yelva Güzellik Merkezi', category:'guzellik-bakim', floor:'floor-1', units:['yelva-guzellik-merkezi'], desc:'Güzellik merkezi'},
      {id:'nastaran', name:'Nastaran Saloon', category:'guzellik-bakim', floor:'floor-1', units:['nastaran-saloon'], desc:'Kuaför ve bakım salonu'},
      {id:'ozdilek', name:'Özdilek', category:'magaza', floor:'floor-1', units:['ozdilek'], desc:'Çok katlı mağaza', link:'https://www.ozdilek.com.tr'},
      {id:'breeze', name:'Breeze', category:'giyim', floor:'floor-1', units:['breeze'], desc:'Giyim mağazası'},
      {id:'eatin', name:"EAT'IN", category:'yeme-icme', floor:'floor-1', units:['eatin'], desc:'Yeme-içme alanı'},
      {id:'spor-okulu', name:'Spor Okulu', category:'spor', floor:'floor-1', units:['spor-okulu-top','spor-okulu','spor-okulu-bottom'], desc:'Spor okulu'},
      {id:'vestel', name:'Vestel', category:'elektronik', floor:'floor-1', units:['vestel'], desc:'Elektronik mağazası', link:'https://www.vestel.com.tr'},
      {id:'turkcell', name:'Turkcell', category:'telekom', floor:'floor-1', units:['turkcell'], desc:'İletişim mağazası', link:'https://www.turkcell.com.tr'},
      {id:'bulut', name:'Bulut', category:'diger', floor:'floor-1', units:['bulut'], desc:'Mağaza'},
      {id:'eticaret', name:'E-Ticaret', category:'diger', floor:'floor-1', units:['e-ticaret'], desc:'Hizmet noktası'},

      // ---- ZEMİN KAT ----
      {id:'vakko', name:'Vakko', category:'giyim', floor:'zemin', units:['vakko'], desc:'Giyim ve moda mağazası', link:'https://www.vakko.com'},
      {id:'kigili', name:'Kiğılı', category:'giyim', floor:'zemin', units:['kigili'], desc:'Erkek giyim mağazası', link:'https://www.kigili.com'},
      {id:'ipekyol', name:'İpekyol', category:'giyim', floor:'zemin', units:['ipekyol'], desc:'Kadın giyim mağazası', link:'https://www.ipekyol.com.tr'},
      {id:'idas', name:'İdaş', category:'magaza', floor:'zemin', units:['idas'], desc:'Mağaza'},
      {id:'derimod', name:'Derimod', category:'giyim', floor:'zemin', units:['derimod'], desc:'Deri giyim mağazası', link:'https://www.derimod.com.tr'},
      {id:'sarar', name:'Sarar', category:'giyim', floor:'zemin', units:['sarar'], desc:'Erkek giyim mağazası', link:'https://www.sarar.com'},
      {id:'haribo', name:'Haribo', category:'yeme-icme', floor:'zemin', units:['haribo'], desc:'Şekerleme mağazası'},
      {id:'tobacco-shop', name:'Tobacco Shop', category:'diger', floor:'zemin', units:['tobacco-shop'], desc:'Tütün ürünleri mağazası'},
      {id:'getir', name:'Getir', category:'hizmet', floor:'zemin', units:['getir'], desc:'Hızlı teslimat noktası', link:'https://getir.com'},
      {id:'mudo', name:'Mudo', category:'ev-yasam', floor:'zemin', units:['mudo'], desc:'Ev ve yaşam / giyim mağazası', link:'https://www.mudo.com.tr'},
      {id:'lc-waikiki', name:'LC Waikiki', category:'giyim', floor:'zemin', units:['lc-waikiki'], desc:'Giyim mağazası', link:'https://www.lcwaikiki.com'},
      {id:'lapis', name:'Lapis', category:'aksesuar', floor:'zemin', units:['lapis'], desc:'Kuyumcu / mücevher mağazası'},
      {id:'cicekci', name:'Çiçekçi', category:'diger', floor:'zemin', units:['cicekci'], desc:'Çiçekçi'},
      {id:'elegance-optik', name:'Elegance Optik', category:'hizmet', floor:'zemin', units:['elegance-optik'], desc:'Optik mağazası'},
      {id:'penti', name:'Penti', category:'giyim', floor:'zemin', units:['penti'], desc:'İç giyim mağazası', link:'https://www.penti.com'},
      {id:'lufian', name:'Lufian', category:'giyim', floor:'zemin', units:['lufian'], desc:'Giyim mağazası', link:'https://www.lufian.com'},
      {id:'tekno-stand', name:'Tekno Stand', category:'elektronik', floor:'zemin', units:['tekno-stand'], desc:'Elektronik ürünler standı'},
      {id:'gratis', name:'Gratis', category:'guzellik-bakim', floor:'zemin', units:['gratis'], desc:'Kozmetik ve kişisel bakım mağazası', link:'https://www.gratis.com'},
      {id:'flore-cafe', name:'Flore Cafe', category:'yeme-icme', floor:'zemin', units:['flore-cafe'], desc:'Kafe'},
      {id:'akcin-doviz', name:'Akçin Döviz', category:'hizmet', floor:'zemin', units:['akcin-doviz'], desc:'Döviz bürosu'},
      {id:'kuruc-esme-kahvesi', name:'Kuruçeşme Kahvesi', category:'yeme-icme', floor:'zemin', units:['kuruc-esme-kahvesi'], desc:'Kahve dükkanı'},
      {id:'pasa-firin', name:'Paşa Fırın', category:'yeme-icme', floor:'zemin', units:['pasa-firin'], desc:'Fırın'},
      {id:'gloria-jeans-coffees', name:"Gloria Jean's Coffees", category:'yeme-icme', floor:'zemin', units:['gloria-jeans-coffees'], desc:'Kahve dükkanı'}
    ];
    const floorLabelMap = Object.fromEntries(FLOORS.map(f=>[f.id,f.label]));
    const catLabelMap = Object.fromEntries(CATEGORIES.map(c=>[c.id,c.label]));
    const storeById = Object.fromEntries(STORES.map(s=>[s.id,s]));
    const unitToStore = {};
    STORES.forEach(s=>{ if(s.units) s.units.forEach(u=>unitToStore[u]=s.id); });

    let activeFloor = 'floor-1';
    let activeCategory = null;
    let activeStore = null;

    const floorSwitch = document.getElementById('floorSwitch');
    const categoryRow = document.getElementById('categoryRow');
    const storeRow = document.getElementById('storeRow');
    const storeFilterWrap = document.getElementById('storeFilterWrap');
    const catLabel = document.getElementById('catLabel');
    const storeLabel = document.getElementById('storeLabel');
    const totalCount = document.getElementById('totalCount');
    const floorCount = document.getElementById('floorCount');

    totalCount.textContent = STORES.length;
    floorCount.textContent = FLOORS.length;

    function buildFloorSwitch(){
      floorSwitch.innerHTML = '';
      FLOORS.forEach(f=>{
        const btn = document.createElement('button');
        const hasHit = activeCategory && STORES.some(s=>s.floor===f.id && s.category===activeCategory);
        btn.className = 'floor-btn' + (activeFloor===f.id?' floor-active':'') + (hasHit?' has-hit':'');
        btn.innerHTML = '<span class="dot"></span>' + f.label;
        btn.onclick = () => selectFloor(f.id);
        floorSwitch.appendChild(btn);
      });
    }

    function selectFloor(floorId){
      activeFloor = floorId;
      FLOORS.forEach(f=>{
        document.getElementById('shell-' + f.id).classList.toggle('hidden-floor', f.id !== floorId);
      });
      buildFloorSwitch();
      applyMapHighlight();
    }

    function buildCategoryChips(){
      categoryRow.innerHTML = '';
      const allChip = document.createElement('button');
      allChip.className = 'chip' + (activeCategory===null ? ' cat-active' : '');
      allChip.textContent = 'Sıfırla';
      allChip.onclick = () => selectCategory(null);
      categoryRow.appendChild(allChip);

      CATEGORIES.forEach(cat=>{
        const n = STORES.filter(s=>s.category===cat.id).length;
        if(n===0) return;
        const chip = document.createElement('button');
        chip.className = 'chip' + (activeCategory===cat.id ? ' cat-active' : '');
        chip.textContent = cat.label + ' (' + n + ')';
        chip.onclick = () => selectCategory(cat.id);
        categoryRow.appendChild(chip);
      });
    }

    function buildStoreChips(){
      storeRow.innerHTML = '';
      if(!activeCategory){
        storeFilterWrap.classList.remove('visible');
        return;
      }
      storeFilterWrap.classList.add('visible');
      storeLabel.textContent = '2 · ' + catLabelMap[activeCategory] + ' — mağaza seç';

      FLOORS.forEach(f=>{
        const stores = STORES.filter(s=>s.category===activeCategory && s.floor===f.id);
        if(stores.length===0) return;
        const group = document.createElement('div');
        group.className = 'floor-group';
        const label = document.createElement('div');
        label.className = 'floor-group-label';
        label.textContent = f.label;
        group.appendChild(label);
        const row = document.createElement('div');
        row.className = 'chip-row';
        stores.forEach(s=>{
          const chip = document.createElement('button');
          chip.className = 'chip store-row-chip' + (activeStore===s.id ? ' store-active' : '');
          chip.textContent = s.name;
          chip.onclick = () => selectStore(s.id);
          row.appendChild(chip);
        });
        group.appendChild(row);
        storeRow.appendChild(group);
      });
    }

    function selectCategory(catId){
      activeCategory = catId;
      if(activeStore && storeById[activeStore].category !== catId){
        activeStore = null;
        hideAllPins();
      }
      buildFloorSwitch();
      buildCategoryChips();
      buildStoreChips();
      applyMapHighlight();
    }

    function selectStore(storeId){
      activeStore = storeId;
      activeCategory = storeById[storeId].category;
      const store = storeById[storeId];
      if(store.floor !== activeFloor){
        activeFloor = store.floor;
        FLOORS.forEach(f=>{
          document.getElementById('shell-' + f.id).classList.toggle('hidden-floor', f.id !== activeFloor);
        });
      }
      buildFloorSwitch();
      buildCategoryChips();
      buildStoreChips();
      applyMapHighlight();
      showPinForStore(storeId);
    }

    document.querySelectorAll('.pin-close').forEach(btn=>{
      btn.onclick = () => hidePin(btn.dataset.floor);
    });
    function hidePin(floorId){
      document.getElementById('pinCard-' + floorId).classList.remove('visible');
    }
    function hideAllPins(){
      FLOORS.forEach(f=>hidePin(f.id));
    }

    function applyMapHighlight(){
      // floor -1 (real svg units)
      document.querySelectorAll('.unit').forEach(el=>{
        el.classList.remove('cat-hit','store-hit','filtering','filtering-line');
      });
      if(activeCategory){
        document.querySelectorAll('.unit').forEach(el=>{
          const id = el.id;
          const storeId = unitToStore[id];
          if(storeId && storeById[storeId].category === activeCategory){
            el.classList.add(activeStore && storeId === activeStore ? 'store-hit' : 'cat-hit');
          } else if (storeId) {
            const origFill = el.getAttribute('fill');
            el.classList.add(origFill === '#086CC4' ? 'filtering-line' : 'filtering');
          }
        });
      }

      buildFloorSwitch();
    }

    function showPinForStore(storeId){
      const store = storeById[storeId];
      const floorId = store.floor;
      let targetEl = null;
      if(store.units){
        targetEl = document.getElementById(store.units[0]);
      }
      if(!targetEl) return;

      const shell = document.getElementById('shell-' + floorId);
      const shellRect = shell.getBoundingClientRect();
      const unitRect = targetEl.getBoundingClientRect();

      const card = document.getElementById('pinCard-' + floorId);
      document.getElementById('pinCat-' + floorId).textContent = catLabelMap[store.category];
      document.getElementById('pinFloorBadge-' + floorId).textContent = floorLabelMap[floorId];
      document.getElementById('pinName-' + floorId).textContent = store.name;
      document.getElementById('pinDesc-' + floorId).textContent = store.desc || '';
      const link = store.link || ('https://www.google.com/search?q=' + encodeURIComponent(store.name + ' mağaza'));
      document.getElementById('pinBtn-' + floorId).href = link;

      let left = (unitRect.left + unitRect.right)/2 - shellRect.left;
      let top = unitRect.top - shellRect.top;

      card.style.left = left + 'px';
      card.style.top = Math.max(top, 10) + 'px';
      card.classList.add('visible');

      requestAnimationFrame(()=>{
        const cardRect = card.getBoundingClientRect();
        let adjustLeft = left;
        if(cardRect.left < shellRect.left + 6) adjustLeft += (shellRect.left + 6 - cardRect.left);
        if(cardRect.right > shellRect.right - 6) adjustLeft -= (cardRect.right - (shellRect.right - 6));
        card.style.left = adjustLeft + 'px';
      });
    }

    // wire up floor -1 map clicks (real path ids)
    Object.keys(unitToStore).forEach(unitId=>{
      const el = document.getElementById(unitId);
      if(!el) return;
      el.classList.add('store-unit');
      el.addEventListener('click', ()=> selectStore(unitToStore[unitId]));
    });

    buildFloorSwitch();
    buildCategoryChips();
    buildStoreChips();
    applyMapHighlight();
  }, []);

  return (
    <div ref={containerRef}>
        <Link href="/" className="count-pill">&#8592; Anasayfa'ya dön</Link>
      <header className="top">
    

        <div className="title-row">
          <div>
            <p className="eyebrow" style={{margin: '0 0 3px'}}>AVM Kat Planları</p>
            <h1>Mağaza Bul</h1>
          </div>
          <div className="count-pill" id="countPill">Toplam <b id="totalCount">0</b> nokta · <b id="floorCount">0</b> kat</div>
        </div>

        <div className="filter-block">
          <div className="floor-switch" id="floorSwitch"></div>

          <p className="filter-label" id="catLabel">1 · Kategori seç</p>
          <div className="chip-row" id="categoryRow"></div>

          <div id="storeFilterWrap">
            <p className="filter-label" id="storeLabel">2 · Mağaza seç</p>
            <div id="storeRow"></div>
          </div>
        </div>
      </header>

      <main>
        <div className="map-shell" id="shell-floor-1">
      <svg viewBox="0 0 2000 2000" role="img" aria-labelledby="map-title-m1 map-desc-m1">
        <title id="map-title">-1. Kat AVM Haritası</title>
        <desc id="map-desc">İnteraktif kullanım için her harita parçası benzersiz bir SVG id değerine sahiptir.</desc>
        <rect width="2000" height="2000" fill="#fff"/>
        <text x="1000" y="160" className="map-title" fontSize="58">-1.KAT</text>
        <g id="floor-map">
          <path id="migros" className="unit" data-name="Migros" data-source-component="1" d="M 292,273 292,595 677,595 678,688 853,688 853,273 Z" fill="#024A94"><title>Migros — id: migros</title></path>
          <path id="petist-pet-market" className="unit" data-name="Petist Pet Market" data-source-component="2" d="M 865,273 865,688 1228,688 1228,273 Z" fill="#024A94"><title>Petist Pet Market — id: petist-pet-market</title></path>
          <path id="airport-bowling" className="unit" data-name="Airport Bowling" data-source-component="3" d="M 1239,273 1239,688 1315,688 1316,661 1706,661 1706,430 1607,430 1530,354 1421,354 1344,277 1325,277 1324,273 Z" fill="#024A94"><title>Airport Bowling — id: airport-bowling</title></path>
          <path id="unit-left-upper" className="unit" data-name="Boş Alan" data-source-component="18" d="M 290,606 290,731 539,731 539,709 576,671 579,673 665,673 665,606 Z" fill="#FFFFFF"><title>Boş Alan — id: unit-left-upper</title></path>
          <path id="unit-right-upper" className="unit" data-name="Boş Alan" data-source-component="19" d="M 1327,673 1327,889 1706,889 1706,673 Z" fill="#FFFFFF"><title>Boş Alan — id: unit-right-upper</title></path>
          <path id="avec-rent-a-car" className="unit" data-name="Avec Rent A Car" data-source-component="20" d="M 586,681 607,701 580,728 580,758 672,758 672,684 666,684 665,681 Z" fill="#024A94"><title>Avec Rent A Car — id: avec-rent-a-car</title></path>
          <path id="avec-rent-a-car-connector" className="unit" data-name="Avec Rent A Car" data-source-component="21" d="M 577,701 569,701 557,712 556,729 543,729 543,746 562,762 568,758 575,758 575,728 578,724 569,715 580,705 Z" fill="#024A94"><title>Avec Rent A Car — id: avec-rent-a-car-connector</title></path>
          <path id="rental-car-connector-1" className="unit" data-name="Araç Kiralama Geçişi" data-source-component="27" d="M 535,746 523,757 546,777 559,765 539,747 Z" fill="#024A94"><title>Araç Kiralama Geçişi — id: rental-car-connector-1</title></path>
          <path id="gameport" className="unit" data-name="Gameport" data-source-component="28" d="M 290,761 290,1175 462,1175 462,928 464,926 480,926 482,933 568,933 568,849 535,849 534,819 469,761 Z" fill="#024A94"><title>Gameport — id: gameport</title></path>
          <path id="rental-car-connector-2" className="unit" data-name="Araç Kiralama Geçişi" data-source-component="29" d="M 524,802 536,812 570,780 670,780 670,767 664,767 663,763 580,763 578,767 563,767 Z" fill="#024A94"><title>Araç Kiralama Geçişi — id: rental-car-connector-2</title></path>
          <path id="york-rent-a-car-connector" className="unit" data-name="York Rent A Car" data-source-component="30" d="M 570,785 539,815 571,843 576,843 576,785 Z" fill="#024A94"><title>York Rent A Car — id: york-rent-a-car-connector</title></path>
          <path id="york-rent-a-car" className="unit" data-name="York Rent A Car" data-source-component="31" d="M 580,802 580,843 670,843 670,785 608,785 607,802 Z" fill="#024A94"><title>York Rent A Car — id: york-rent-a-car</title></path>
          <path id="tedi" className="unit" data-name="Tedi" data-source-component="32" d="M 862,806 862,979 1130,979 1130,806 Z" fill="#024A94"><title>Tedi — id: tedi</title></path>
          <path id="yelva-guzellik-merkezi" className="unit" data-name="Yelva Güzellik Merkezi" data-source-component="33" d="M 1140,806 1140,979 1229,979 1229,806 Z" fill="#024A94"><title>Yelva Güzellik Merkezi — id: yelva-guzellik-merkezi</title></path>
          <path id="gameport-mini" className="unit" data-name="Gameport" data-source-component="50" d="M 761,885 761,963 834,964 837,961 837,887 834,884 Z" fill="#024A94"><title>Gameport — id: gameport-mini</title></path>
          <path id="ozdilek" className="unit" data-name="Özdilek" data-source-component="52" d="M 1326,900 1326,998 1706,998 1706,900 Z" fill="#024A94"><title>Özdilek — id: ozdilek</title></path>
          <path id="unit-right-lower" className="unit" data-name="Boş Alan" data-source-component="59" d="M 1327,1008 1326,1067 1493,1067 1493,1053 1495,1051 1542,1051 1544,1053 1544,1065 1591,1065 1593,1067 1593,1080 1630,1081 1630,1176 1693,1176 1695,1171 1706,1171 1706,1008 Z" fill="#FFFFFF"><title>Boş Alan — id: unit-right-lower</title></path>
          <path id="eatin" className="unit" data-name="EAT'IN" data-source-component="60" d="M 759,1021 759,1068 761,1070 812,1069 812,1020 762,1019 Z" fill="#024A94"><title>EAT'IN — id: eatin</title></path>
           <path id="unit-center-right" className="unit" data-name="Boş Alan" data-source-component="62" d="M 1142,1029 1138,1033 1138,1210 1142,1214 1231,1214 1235,1210 1235,1033 1231,1029 Z" fill="#FFFFFF"><title>Boş Alan — id: unit-center-right</title></path>
          <path id="spor-okulu-top" className="unit" data-name="Spor Okulu" data-source-component="63" d="M 963,1035 963,1056 968,1060 1026,1060 1031,1056 1031,1035 1028,1032 966,1032 Z" fill="#024A94"><title>Spor Okulu — id: spor-okulu-top</title></path>
          <path id="spor-okulu" className="unit" data-name="Spor Okulu" data-source-component="66" d="M 915,1070 911,1076 911,1106 908,1108 892,1108 887,1112 887,1192 892,1196 906,1196 909,1199 909,1266 914,1272 1076,1271 1079,1267 1079,1199 1082,1196 1099,1196 1103,1192 1103,1111 1096,1106 1083,1106 1081,1104 1080,1073 1075,1069 Z" fill="#024A94"><title>Spor Okulu — id: spor-okulu</title></path>
          <path id="breeze" className="unit" data-name="Breeze" data-source-component="80" d="M 663,1182 659,1181 659,1175 575,1175 574,1183 290,1183 290,1255 658,1255 659,1252 663,1252 Z" fill="#024A94"><title>Breeze — id: breeze</title></path>
          <path id="poligun" className="unit" data-name="Poligun" data-source-component="81" d="M 1330,1176 1330,1382 1421,1382 1422,1414 1709,1414 1709,1184 1592,1184 1591,1198 1542,1198 1541,1190 1504,1190 1502,1188 1502,1175 1439,1175 1437,1181 1418,1181 1417,1176 Z" fill="#024A94"><title>Poligun — id: poligun</title></path>
          <path id="puffy-yatas" className="unit" data-name="Puffy Yataş" data-source-component="85" d="M 754,1259 667,1259 666,1267 658,1267 657,1264 572,1264 569,1267 569,1337 571,1338 571,1344 565,1346 565,1383 754,1383 Z" fill="#024A94"><title>Puffy Yataş — id: puffy-yatas</title></path>
          <path id="vestel" className="unit" data-name="Vestel" data-source-component="86" d="M 762,1259 762,1383 929,1383 929,1359 931,1357 948,1357 948,1343 942,1341 942,1334 946,1331 859,1260 Z" fill="#024A94"><title>Vestel — id: vestel</title></path>
          <path id="nastaran-saloon" className="unit" data-name="Nastaran Saloon" data-source-component="87" d="M 1142,1258 1142,1382 1228,1382 1228,1258 Z" fill="#024A94"><title>Nastaran Saloon — id: nastaran-saloon</title></path>
          <path id="europcar" className="unit" data-name="Europcar" data-source-component="88" d="M 1238,1258 1238,1382 1322,1382 1322,1258 Z" fill="#024A94"><title>Europcar — id: europcar</title></path>
          <path id="turkcell" className="unit" data-name="Turkcell" data-source-component="89" d="M 1126,1261 1045,1331 1048,1334 1048,1341 1041,1342 1041,1357 1060,1358 1060,1381 1132,1381 1132,1265 Z" fill="#024A94"><title>Turkcell — id: turkcell</title></path>
          <path id="spor-okulu-bottom" className="unit" data-name="Spor Okulu" data-source-component="90" d="M 943,1284 943,1307 946,1310 1044,1310 1048,1307 1048,1285 1045,1282 945,1282 Z" fill="#024A94"><title>Spor Okulu — id: spor-okulu-bottom</title></path>
          <path id="bulut" className="unit" data-name="Bulut" data-source-component="109" d="M 563,1389 563,1748 950,1748 950,1389 Z" fill="#024A94"><title>Bulut — id: bulut</title></path>
          <path id="e-ticaret" className="unit" data-name="E-Ticaret" data-source-component="110" d="M 961,1389 961,1748 1415,1748 1415,1389 Z" fill="#024A94"><title>E-Ticaret — id: e-ticaret</title></path>
        </g>
        <text className="map-label" fontSize="28"><tspan x="590" y="448.0">MİGROS</tspan></text>
        <text className="map-label" fontSize="26"><tspan x="1048" y="440.4">PETİST</tspan><tspan x="1048" y="467.7">PET MARKET</tspan></text>
        <text className="map-label" fontSize="26"><tspan x="1447" y="479.4">AIRPORT</tspan><tspan x="1447" y="506.7">BOWLING</tspan></text>
        <text className="map-label" fontSize="15"><tspan x="627" y="702.0">AVEC</tspan><tspan x="627" y="717.0">RENT A</tspan><tspan x="627" y="732.0">CAR</tspan></text>
        <text className="map-label" fontSize="15"><tspan x="625" y="802.1">York</tspan><tspan x="625" y="817.9">Rent A Car</tspan></text>
        <text className="map-label" fontSize="28"><tspan x="398" y="950.0">GAMEPORT</tspan></text>
        <text className="map-label" fontSize="20"><tspan x="600" y="1078.0">GAMEPORT</tspan></text>
        <text className="map-label" fontSize="30"><tspan x="1000" y="895.0">TEDİ</tspan></text>
        <text className="map-label" fontSize="15"><tspan x="1185" y="878.0">Yelva</tspan><tspan x="1185" y="893.0">Güzellik</tspan><tspan x="1185" y="908.0">Merkezi</tspan></text>
        <text className="map-label" fontSize="24"><tspan x="1515" y="950.0">ÖZDİLEK</tspan></text>
        <text className="map-label" fontSize="14"><tspan x="548" y="1048.0">EAT'IN</tspan></text>
        <text className="map-label" fontSize="16"><tspan x="800" y="712.0">CAN</tspan><tspan x="800" y="728.0">PARK</tspan></text>
        <text className="map-label" fontSize="26"><tspan x="800" y="1154.3">SPOR</tspan><tspan x="800" y="1181.6">OKULU</tspan></text>
        <text className="map-label" fontSize="27"><tspan x="480" y="1218.0">BREEZE</tspan></text>
        <text className="map-label" fontSize="24"><tspan x="660" y="1308.0">PUFFY</tspan><tspan x="660" y="1332.0">YATAŞ</tspan></text>
        <text className="map-label" fontSize="23"><tspan x="845" y="1320.0">VESTEL</tspan></text>
        <text className="map-label" fontSize="14"><tspan x="1097" y="1332.0">TURKCELL</tspan></text>
        <text className="map-label" fontSize="14"><tspan x="1185" y="1313.0">NASTARAN</tspan><tspan x="1185" y="1327.0">SALOON</tspan></text>
        <text className="map-label" fontSize="13"><tspan x="1280" y="1320.0">EUROPCAR</tspan></text>
        <text className="map-label" fontSize="25"><tspan x="1520" y="1295.0">POLİGUN</tspan></text>
        <text className="map-label" fontSize="26"><tspan x="758" y="1568.0">BULUT</tspan></text>
        <text className="map-label" fontSize="26"><tspan x="1188" y="1568.0">E-TİCARET</tspan></text>
       
      </svg>
          <div className="pin-card" id="pinCard-floor-1">
            <button className="pin-close" data-floor="floor-1">&#10005;</button>
            <p className="pin-cat"><span id="pinCat-floor-1">Kategori</span><span className="pin-floor-badge" id="pinFloorBadge-floor-1">-1. Kat</span></p>
            <p className="pin-name" id="pinName-floor-1">Mağaza Adı</p>
            <p className="pin-desc" id="pinDesc-floor-1">Açıklama</p>
            <a className="pin-btn" id="pinBtn-floor-1" href="#" target="_blank" rel="noopener">Mağazaya Git &#8594;</a>
          </div>
        </div>

        <div className="map-shell hidden-floor" id="shell-zemin">
      <svg viewBox="0 0 2000 2000" role="img" aria-labelledby="map-title-zemin map-desc-zemin">
        <title id="map-title-zemin">Zemin Kat AVM Haritası</title>
        <desc id="map-desc-zemin">İnteraktif kullanım için her harita parçası benzersiz bir SVG id değerine sahiptir.</desc>
        <rect width="2000" height="2000" fill="#fff"/>
      <g id="floor-map" stroke="#fff" strokeWidth="6" strokeLinejoin="round">
          <path id="region-01" className="unit" data-name="Boş Alan" data-source-component="1" d="M 452 438 L 431 421 L 373 471 L 375 480 L 373 488 L 384 497 Z" fill="#FFFFFF"><title>Boş Alan — id: region-01</title></path>
          <path id="vakko" className="unit" data-name="Vakko" data-source-component="2" d="M 1120 682 L 1119 714 L 1125 721 L 1130 723 L 1183 723 L 1258 785 L 1766 785 L 1766 671 L 1526 481 L 1500 503 L 1553 544 L 1545 549 L 1486 502 L 1502 488 L 1499 484 L 1502 470 L 1444 423 Z" fill="#024A94"><title>Vakko — id: vakko</title></path>
          <path id="kigili" className="unit" data-name="Kiğılı" data-source-component="3" d="M 335 550 L 632 785 L 698 732 L 754 729 L 763 721 L 762 684 L 457 442 L 388 500 L 392 504 Z" fill="#024A94"><title>Kiğılı — id: kigili</title></path>
          <path id="region-04" className="unit" data-name="Boş Alan" data-source-component="4" d="M 358 482 L 115 673 L 115 871 L 143 871 L 143 695 L 383 503 Z" fill="#FFFFFF"><title>Boş Alan — id: region-04</title></path>
          <path id="ipekyol" className="unit" data-name="İpekyol" data-source-component="5" d="M 209 649 L 372 781 L 372 879 L 628 878 L 627 790 L 330 553 Z" fill="#024A94"><title>İpekyol — id: ipekyol</title></path>
          <path id="idas" className="unit" data-name="İdaş" data-source-component="6" d="M 642 574 L 646 583 L 755 670 L 770 679 L 782 682 L 853 682 L 859 677 L 860 587 L 856 577 L 848 571 L 645 570 Z" fill="#024A94"><title>İdaş — id: idas</title></path>
          <path id="giris-ust" className="unit" data-name="Boş Alan" data-source-component="7" d="M 999 679 L 1005 683 L 1100 683 L 1110 680 L 1230 585 L 1235 579 L 1234 573 L 1230 570 L 1009 571 L 1001 577 L 998 584 Z" fill="#FFFFFF"><title>Boş Alan — id: giris-ust</title></path>
          <path id="region-13" className="unit" data-name="Boş Alan" data-source-component="13" d="M 149 697 L 149 741 L 314 741 L 204 653 Z" fill="#FFFFFF"><title>Boş Alan — id: region-13</title></path>
          <path id="derimod" className="unit" data-name="Derimod" data-source-component="16" d="M 149 747 L 149 855 L 175 855 L 176 874 L 115 875 L 115 980 L 615 979 L 614 885 L 366 885 L 365 783 L 321 747 Z" fill="#024A94"><title>Derimod — id: derimod</title></path>
          <path id="region-17" className="unit" data-name="Boş Alan" data-source-component="17" d="M 1909 783 L 1783 783 L 1782 800 L 1773 800 L 1772 794 L 1569 794 L 1569 850 L 1635 850 L 1636 875 L 1657 875 L 1658 860 L 1774 860 L 1775 877 L 1799 877 L 1800 887 L 1888 887 L 1889 882 L 1909 882 Z" fill="#FFFFFF"><title>Boş Alan — id: region-17</title></path>
          <path id="sarar" className="unit" data-name="Sarar" data-source-component="18" d="M 1562 794 L 1261 794 L 1261 885 L 1273 887 L 1274 903 L 1386 903 L 1387 888 L 1397 887 L 1398 861 L 1522 861 L 1522 842 L 1515 841 L 1516 834 L 1562 834 Z" fill="#024A94"><title>Sarar — id: sarar</title></path>
          <path id="haribo" className="unit" data-name="Haribo" data-source-component="19" d="M 757 811 L 756 837 L 762 844 L 825 844 L 831 839 L 831 812 L 827 808 L 763 807 Z" fill="#024A94"><title>Haribo — id: haribo</title></path>
          <path id="region-20" className="unit" data-name="Boş Alan" data-source-component="20" d="M 940 840 L 942 842 L 1098 842 L 1101 845 L 1102 899 L 1171 900 L 1174 896 L 1174 818 L 1172 814 L 941 814 Z" fill="#FFFFFF"><title>Boş Alan — id: region-20</title></path>
          <path id="region-31" className="unit" data-name="Boş Alan" data-source-component="31" d="M 1580 856 L 1581 885 L 1630 885 L 1630 855 Z" fill="#FFFFFF"><title>Boş Alan — id: region-31</title></path>
          <path id="region-32" className="unit" data-name="Boş Alan" data-source-component="32" d="M 1662 874 L 1662 918 L 1711 917 L 1711 881 L 1688 881 L 1687 874 Z" fill="#FFFFFF"><title>Boş Alan — id: region-32</title></path>
          <path id="region-34" className="unit" data-name="Boş Alan" data-source-component="34" d="M 1581 889 L 1581 907 L 1574 908 L 1574 948 L 1560 949 L 1560 983 L 1630 983 L 1630 889 Z" fill="#FFFFFF"><title>Boş Alan — id: region-34</title></path>
          <path id="region-35" className="unit" data-name="Boş Alan" data-source-component="35" d="M 1685 924 L 1685 963 L 1717 963 L 1718 994 L 1797 994 L 1798 959 L 1803 960 L 1803 982 L 1908 982 L 1908 894 L 1799 894 L 1798 923 Z" fill="#FFFFFF"><title>Boş Alan — id: region-35</title></path>
          <path id="region-36" className="unit" data-name="Boş Alan" data-source-component="36" d="M 1494 908 L 1494 983 L 1554 983 L 1554 945 L 1569 944 L 1569 908 Z" fill="#FFFFFF"><title>Boş Alan — id: region-36</title></path>
          <path id="tobacco-shop" className="unit" data-name="Tobacco Shop" data-source-component="41" d="M 1283 957 L 1283 985 L 1387 984 L 1387 958 L 1384 954 L 1286 954 Z" fill="#024A94"><title>Tobacco Shop — id: tobacco-shop</title></path>
          <path id="getir" className="unit" data-name="Getir" data-source-component="47" d="M 112 996 L 111 1144 L 120 1184 L 133 1211 L 163 1248 L 362 1091 L 361 988 L 116 988 L 116 995 Z" fill="#024A94"><title>Getir — id: getir</title></path>
          <path id="mudo" className="unit" data-name="Mudo" data-source-component="48" d="M 614 988 L 370 988 L 370 1094 L 170 1256 L 294 1356 L 358 1304 L 425 1356 L 390 1384 L 423 1413 L 429 1416 L 462 1388 L 488 1408 L 746 1197 L 746 1184 L 628 1089 L 628 996 L 615 995 Z" fill="#024A94"><title>Mudo — id: mudo</title></path>
          <path id="lc-waikiki" className="unit" data-name="LC Waikiki" data-source-component="49" d="M 1908 994 L 1892 994 L 1891 990 L 1803 990 L 1802 1000 L 1778 1000 L 1777 1016 L 1665 1016 L 1659 1006 L 1637 1006 L 1629 991 L 1275 991 L 1274 996 L 1264 996 L 1264 1089 L 1146 1184 L 1145 1198 L 1404 1404 L 1429 1384 L 1467 1416 L 1521 1372 L 1484 1340 L 1533 1299 L 1550 1311 L 1580 1288 L 1635 1330 L 1724 1256 L 1750 1231 L 1773 1200 L 1782 1177 L 1788 1147 L 1789 1089 L 1908 1089 Z" fill="#024A94"><title>LC Waikiki — id: lc-waikiki</title></path>
          <path id="lapis" className="unit" data-name="Lapis" data-source-component="51" d="M 761 1040 L 757 1045 L 758 1118 L 761 1120 L 795 1120 L 798 1117 L 798 1043 L 795 1040 Z" fill="#024A94"><title>Lapis — id: lapis</title></path>
          <path id="cicekci" className="unit" data-name="Çiçekçi" data-source-component="52" d="M 1100 1049 L 1100 1072 L 1108 1079 L 1166 1079 L 1174 1072 L 1174 1049 L 1167 1042 L 1107 1042 Z" fill="#024A94"><title>Çiçekçi — id: cicekci</title></path>
          <path id="elegance-optik" className="unit" data-name="Elegance Optik" data-source-component="59" d="M 680 1261 L 716 1288 L 828 1288 L 827 1206 L 821 1201 L 752 1201 Z" fill="#024A94"><title>Elegance Optik — id: elegance-optik</title></path>
          <path id="penti" className="unit" data-name="Penti" data-source-component="60" d="M 1068 1208 L 1067 1302 L 1191 1302 L 1226 1274 L 1140 1204 L 1072 1204 Z" fill="#024A94"><title>Penti — id: penti</title></path>
          <path id="lufian" className="unit" data-name="Lufian" data-source-component="65" d="M 568 1353 L 602 1378 L 827 1378 L 828 1294 L 714 1294 L 674 1265 Z" fill="#024A94"><title>Lufian — id: lufian</title></path>
          <path id="tekno-stand" className="unit" data-name="Tekno Stand" data-source-component="66" d="M 892 1276 L 892 1315 L 898 1322 L 999 1322 L 1005 1317 L 1005 1275 L 1000 1270 L 898 1270 Z" fill="#024A94"><title>Tekno Stand — id: tekno-stand</title></path>
          <path id="gratis" className="unit" data-name="Gratis" data-source-component="67" d="M 1362 1381 L 1232 1278 L 1195 1308 L 1067 1309 L 1067 1406 L 1334 1406 Z" fill="#024A94"><title>Gratis — id: gratis</title></path>
          <path id="region-71" className="unit" data-name="Boş Alan" data-source-component="71" d="M 1532 1309 L 1492 1340 L 1525 1367 L 1565 1334 Z" fill="#FFFFFF"><title>Boş Alan — id: region-71</title></path>
          <path id="region-72" className="unit" data-name="Boş Alan" data-source-component="72" d="M 357 1311 L 328 1336 L 386 1381 L 417 1356 Z" fill="#FFFFFF"><title>Boş Alan — id: region-72</title></path>
          <path id="region-73" className="unit" data-name="Boş Alan" data-source-component="73" d="M 1628 1335 L 1600 1314 L 1384 1494 L 1408 1515 Z" fill="#FFFFFF"><title>Boş Alan — id: region-73</title></path>
          <path id="region-75" className="unit" data-name="Boş Alan" data-source-component="75" d="M 299 1359 L 354 1404 L 363 1399 L 373 1406 L 365 1413 L 418 1457 L 422 1454 L 435 1453 L 448 1441 L 325 1340 Z" fill="#FFFFFF"><title>Boş Alan — id: region-75</title></path>
          <path id="flore-cafe" className="unit" data-name="Flore Cafe" data-source-component="78" d="M 828 1384 L 598 1384 L 561 1358 L 238 1624 L 238 1668 L 658 1669 L 658 1431 L 828 1430 Z" fill="#024A94"><title>Flore Cafe — id: flore-cafe</title></path>
          <path id="akcin-doviz" className="unit" data-name="Akçin Döviz" data-source-component="79" d="M 893 1371 L 892 1412 L 898 1419 L 999 1419 L 1005 1413 L 1005 1373 L 999 1367 L 898 1367 Z" fill="#024A94"><title>Akçin Döviz — id: akcin-doviz</title></path>
          <path id="kuruc-esme-kahvesi" className="unit" data-name="Kuruçeşme Kahvesi" data-source-component="81" d="M 1435 1440 L 1368 1386 L 1337 1412 L 1068 1412 L 1068 1510 L 1348 1511 Z" fill="#024A94"><title>Kuruçeşme Kahvesi — id: kuruc-esme-kahvesi</title></path>
          <path id="pasa-firin" className="unit" data-name="Paşa Fırın" data-source-component="84" d="M 666 1438 L 666 1627 L 761 1627 L 775 1622 L 818 1581 L 826 1565 L 827 1438 Z" fill="#024A94"><title>Paşa Fırın — id: pasa-firin</title></path>
          <path id="gloria-jeans-coffees" className="unit" data-name="Gloria Jean's Coffees" data-source-component="88" d="M 1398 1523 L 1394 1519 L 1394 1512 L 1377 1497 L 1351 1518 L 1069 1518 L 1068 1562 L 1133 1618 L 1276 1618 Z" fill="#024A94"><title>Gloria Jean's Coffees — id: gloria-jeans-coffees</title></path>
      </g>
      <text x="1000" y="160" className="map-title" fontSize="58">ZEMİN KAT</text>
      <g id="central-walkway" fill="none" stroke="#024A94" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 810 850 H 1080 Q 1090 850 1090 862 V 920 Q 1090 940 1110 940 H 1130 Q 1148 940 1148 958 V 982"/>
        <path d="M 810 850 Q 790 850 790 870 V 900 Q 790 920 770 920 H 750 Q 730 920 730 940 V 982"/>
        <path d="M 730 1035 V 1140 Q 730 1160 750 1160 H 1070 Q 1090 1160 1090 1140 V 1035"/>
        <circle cx="770" cy="970" r="42" fill="#fff"/>
        <circle cx="1110" cy="970" r="42" fill="#fff"/>
      </g>
      <g id="floor-labels">
      <text className="map-label" x="548" y="620" fontSize="28">KİĞİLİ</text>
      <text className="map-label" x="429" y="728" fontSize="28">İPEKYOL</text>
      <text className="map-label" x="775" y="620" fontSize="28">İDAŞ</text>
      <text className="map-label" x="1455" y="655" fontSize="28">VAKKO</text>
      <text className="map-label" x="320" y="913" fontSize="27">DERİMOD</text>
      <text className="map-label" x="221" y="1095" fontSize="27">GETİR</text>
      <text className="map-label" x="471" y="1196" fontSize="28">MUDO</text>
      <text className="map-label" x="760" y="1250.0" fontSize="20">
      <tspan x="760" dy="0">ELEGANCE</tspan>
      <tspan x="760" dy="21.0">OPTİK</tspan>
      </text>
      <text className="map-label" x="710" y="1330" fontSize="24">LUFİAN</text>
      <text className="map-label" x="514" y="1535.0" fontSize="24">
      <tspan x="514" dy="0">FLORE</tspan>
      <tspan x="514" dy="25.200000000000003">CAFE</tspan>
      </text>
      <text className="map-label" x="745" y="1535.0" fontSize="24">
      <tspan x="745" dy="0">PAŞA</tspan>
      <tspan x="745" dy="25.200000000000003">FIRIN</tspan>
      </text>
      <text className="map-label" x="1405" y="840" fontSize="27">SARAR</text>
      <text className="map-label" x="1505" y="1160" fontSize="27">LC WAIKIKI</text>
      <text className="map-label" x="1140" y="1260" fontSize="26">PENTİ</text>
      <text className="map-label" x="1198" y="1358" fontSize="26">GRATİS</text>
      <text className="map-label" x="1195" y="1460.0" fontSize="22">
      <tspan x="1195" dy="0">KURUÇEŞME</tspan>
      <tspan x="1195" dy="23.1">KAHVESİ</tspan>
      </text>
      <text className="map-label" x="1220" y="1555.0" fontSize="21">
      <tspan x="1220" dy="0">GLORIA JEAN’S</tspan>
      <tspan x="1220" dy="22.05">COFFEES</tspan>
      </text>
      <text className="map-label" x="795" y="822" fontSize="16">HARİBO</text>
      <text className="map-label" x="718" y="930" fontSize="13">TURKCELL</text>
      <text className="map-label" x="779" y="1080" fontSize="16">LAPİS</text>
      <text className="map-label" x="1137" y="1060" fontSize="16">ÇİÇEKÇİ</text>
      <text className="map-label" x="1336" y="971.0" fontSize="14">
      <tspan x="1336" dy="0">TOBACCO</tspan>
      <tspan x="1336" dy="14.700000000000001">SHOP</tspan>
      </text>
      <text className="map-label" x="949" y="1296.0" fontSize="15">
      <tspan x="949" dy="0">TEKNO</tspan>
      <tspan x="949" dy="15.75">STAND</tspan>
      </text>
      <text className="map-label" x="949" y="1393.0" fontSize="15">
      <tspan x="949" dy="0">AKÇIN</tspan>
      <tspan x="949" dy="15.75">DÖVİZ</tspan>
      </text>
      <text className="map-label" x="950" y="1470" fontSize="18">ANA GİRİŞ</text>
      <text className="map-label" x="900" y="665" fontSize="18">GİRİŞ</text>
      </g></svg>
          <div className="pin-card" id="pinCard-zemin">
            <button className="pin-close" data-floor="zemin">&#10005;</button>
            <p className="pin-cat"><span id="pinCat-zemin">Kategori</span><span className="pin-floor-badge" id="pinFloorBadge-zemin">Zemin Kat</span></p>
            <p className="pin-name" id="pinName-zemin">Mağaza Adı</p>
            <p className="pin-desc" id="pinDesc-zemin">Açıklama</p>
            <a className="pin-btn" id="pinBtn-zemin" href="#" target="_blank" rel="noopener">Mağazaya Git &#8594;</a>
          </div>
          </div>
      </main>

      <footer>Bir kategoriye, ardından bir mağazaya dokunarak haritada işaretleyin — veya doğrudan harita üzerindeki bir alana tıklayın. Kat sekmeleri arasında geçince seçili filtre korunur.</footer>
    </div>
  );
}