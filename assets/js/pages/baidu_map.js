/**
 * Created by yxt on 17/5/4.
 */
var map = new BMap.Map("allmap");
map.centerAndZoom(new BMap.Point(121.451609,31.035047),17);
map.enableScrollWheelZoom(true);
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
map.addControl(top_left_navigation);
map.addControl(top_left_control);
var new_point = new BMap.Point(121.451753,31.035047);
var marker = new BMap.Marker(new_point);  // 创建标注
map.addOverlay(marker);              // 将标注添加到地图中
map.panTo(new_point);

