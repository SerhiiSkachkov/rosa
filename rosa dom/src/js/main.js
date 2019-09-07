// Progress Scroll
$(document).ready(function(){
    //slick
	$('.js-bonus').slick({
		dots: true,
		arrows: false,
    swipe: false,
    touchMove: false
	});

    if($('.js-select').length > 0){
        $('.js-select').select2({
           language: 'ru',
           width: '100%',
           minimumResultsForSearch: Infinity,
        });
    };

    //slick end
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    //heigiht
	function setLayoutHeight(sellector) {
    	var highestBox = 0;

    	jQuery(sellector).height('auto');

    	jQuery(sellector).each(function (){
        	if (jQuery(this).height() > highestBox) {
            	highestBox = jQuery(this).height();
        	}
    	});
    	jQuery(sellector).height(highestBox);
	};

	function callSetLayoutHeight() {
    	for (var i = 1; i <= 10; i++) {
        	if ($('.js-set-height-' + i).length > 0) {
            	setLayoutHeight('.js-set-height-' + i);
        	}
    	}
    }

    callSetLayoutHeight();
	$(window).resize(function() {
	  	callSetLayoutHeight();
	});

    //height end
  $(window).resize(function(){
   if($('#dinamicColumnChart').length > 0) {
      dinamicColumnChart.resize();
    };
  });

//   // dinamick graphick
  if($('#dinamicColumnChart').length > 0) {

    var dinamicColumnChart = echarts.init(document.getElementById('dinamicColumnChart'));

    var dinamicColumnChartOption = {
        tooltip: {
            formatter: "{b} : {d}%"
        },
        color: ['#3bc3f6', '#f74364', '#5ce876'],
        legend: {
            orient : 'vertical',
            y : '70',
            x : '50%',
            textStyle: {
                fontSize: 16,
                lineHeight: 40
            },
            data: [
                    {name: 'Инвестиционный бонус', icon: 'circle'},
                    {name: 'Реферальный бонус', icon: 'circle'},
                    {name: 'Бинарный бонус', icon: 'circle'}
                ]
        },
        series : [
            {
                type:'pie',
                radius : [' 130', '133'],
                center : ['142', 144],
                avoidLabelOverlap: false,
                itemStyle : {
                    normal : {
                        label : {
                            show: false,
                            position : 'center',
                            formatter: '{c} \n {b}',
                            fontWeight: 'bold',
                            textAlign: 'center',            
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : '100',
                            textStyle : {
                                fontSize : '14',
                            }
                        }
                    }
                },
                data:[
                    {value:1960, name: 'Инвестиционный бонус',},
                    {value:590, name: 'Реферальный бонус'},
                    {value:500, name: 'Бинарный бонус'}
                ]
            }
        ]    
    };
    dinamicColumnChart.setOption(dinamicColumnChartOption);
  };
});

