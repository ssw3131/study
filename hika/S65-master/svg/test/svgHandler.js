var svg = $VG().css({
                    border: '1px solid black',
                    width: '960px',
                    height: '540px'
             }).viewBox(0, 0, 960, 540)
               .appendTo(document.body);

// line
svg.addLine().stroke('black').strokeWidth(2).pos(10, 10, 90, 60);
svg.addLine().id('myLine').className('clsLine').stroke('black').dashArray(1, 1).pos(10, 20, 90, 70);
$VG('<line>').stroke('green').strokeWidth(3).lineCap('round').pos(10, 30, 90, 80).appendTo(svg);
$VG('<line stroke="red" x1="10" y1="40" x2="90" y2="90" />').appendTo(svg);

// rect
svg.addRect().pos(110, 10, 80, 80);
svg.addRect().fill('none').stroke('gray').pos(115, 15, 70, 70);
svg.addRect().fill('yellow').pos(120, 20, 60, 60).radius(5);
$VG('<rect>').fill('red').pos(125, 25, 50, 50).radius(10, 30).appendTo(svg);

//ellipse
svg.addEllipse().fill('gray').pos(250, 50, 40);
$VG('<ellipse>').stroke('black').strokeWidth(2).dashArray(4, 4).fill('yellow').pos(250, 50, 35, 15).appendTo(svg);
$VG('<ellipse cx="250" cy="50" rx="10" ry="10" fill="red" stroke="black" stroke-width="2"/>').appendTo(svg);

// path && collection
svg.addPath().moveTo(10, 110).lineTo(90, 110, 10, 190)
             .moveTo(110, 110).lineBy(80, 80, -80, 0, 80, -80).close();
$VG('<path>').moveTo(210, 110).cBezTo(210, 150, 290, 150, 290, 190)
             .moveTo(310, 110).qBezTo(310, 150, 350, 150, 390, 190, 350, 150, 310, 110)
             .iArc(450, 150, 30, 50, 0, 135)
             .appendTo(svg);


// textㅣ
svg.addText().text('hello, s65!').pos(10, 210).fill('blue');
svg.addText().text('BsideSoft x Pikicast')
             .pos(10, 250)
             .fontFamily('Courier New')
             .fontSize('30pt')
             .fontWeight('bolder')
             .click(function(e) {
                alert(this.text());
            });

// collection
svg.find('path').stroke('blue').strokeWidth(3).dashArray(1, 4).lineCap('round').lineJoin('round').fill('yellow');
svg.find('path')[1].dashArray(1).fill('none');
$VG('ellipse').css('opacity', '0.2');
$VG('.clsLine').stroke('purple');

// group
svg.addGroup().fill('none').stroke('black').dashArray(1, 1).append('text');

// transform
$VG('path')[1].scale(2, 2).rotate(30).rotate(-25, 100, 100)
    .flattenMatrix()
    .attr('vector-effect', 'non-scaling-stroke');