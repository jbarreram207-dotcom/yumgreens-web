"""Genera un HTML autocontenido (CSS, JS, fuentes, íconos e imágenes inlinados). Uso: python3 tools/build_single.py dist/yumgreens-sitio.html"""
import re,sys,base64,os,json
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd=lambda p:open(os.path.join(R,p),encoding='utf-8').read()
mime={'jpg':'image/jpeg','png':'image/png','webp':'image/webp','jpeg':'image/jpeg','svg':'image/svg+xml','woff2':'font/woff2'}
def uri(p): return f"data:{mime[p.rsplit('.',1)[1]]};base64,"+base64.b64encode(open(os.path.join(R,p),'rb').read()).decode()
h=rd('index.html')
css=rd('css/styles.css'); css=re.sub(r'url\(\.\./(fonts/[^)]+)\)',lambda m:'url('+uri(m.group(1))+')',css)
h=h.replace('<link rel="stylesheet" href="css/styles.css">','<style>'+css+'</style>')
h=h.replace('<link rel="icon" href="favicon.ico" sizes="any">\n','').replace('<link rel="manifest" href="site.webmanifest">\n','')
for p in re.findall(r'href="(img/icons/[^"]+)"',h): h=h.replace(f'href="{p}"',f'href="{uri(p)}"')
imgs={}
for root,_,fs in os.walk(os.path.join(R,'img')):
    for f in fs:
        p=os.path.relpath(os.path.join(root,f),R).replace(os.sep,'/')
        if f!='referencia-verde.png' and '/icons/' not in p: imgs[p]=uri(p)
h=h.replace('src="img/marca/logo-yumgreens-lima.png"','src="'+imgs['img/marca/logo-yumgreens-lima.png']+'"')
names=('icons','config','data','view-inicio','app')
js='window.__IMG='+json.dumps(imgs)+';\n'+''.join(rd(f'js/{n}.js')+'\n' for n in names)
h=re.sub(r'(<script src="js/[a-z-]+\.js"></script>)+',lambda m:'<script>'+js+'</script>',h)
open(sys.argv[1],'w',encoding='utf-8').write(h); print(len(h)//1024,'KB')
