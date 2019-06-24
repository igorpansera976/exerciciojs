var deuses = ['Aegir', 'aud', 'Balder'];
var deuses0 = ['loki', 'odin', 'frey'];

Array.prototype.push.apply(deuses, deuses0)

for (var i = 0; i < deuses.length; i++) {
    alert(deuses[i]);
}