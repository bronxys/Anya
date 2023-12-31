const fs = require('fs')

exports.isLimit = function(sender, isPremium, isOwner, limitCount, _db){
    if (isOwner) return false
    if (isPremium) return false
    let found = false
    for (let i of _db) {
        if (i.id === sender) {
            let limits = i.limit
            if (limits >= limitCount) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        const obj = { id: sender, limit: 0 }
        _db.push(obj)
        fs.writeFileSync('./armor/FilesJson/grupos/limit.json', JSON.stringify(_db))
        return false
    }
}
exports.limitAdd = function(sender, _db){
    let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			_db[found].limit += 1
			fs.writeFileSync('./armor/FilesJson/grupos/limit.json', JSON.stringify(_db))
		}
}
exports.getLimit = function(sender, limitCount, _db){
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            found = i
        }
    })
    if (found !== false) {
        return limitCount - _db[found].limit
    } else {
        return limitCount
    }
}

exports.addLevelingXp = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === userId) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./armor/FilesJson/usuarios/level.json', JSON.stringify(_level))
}
}

exports.giveLimit = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].limit -= duit
        fs.writeFileSync('./armor/FilesJson/grupos/limit.json', JSON.stringify(_db))
    } else {
        const njt = duit - duit - duit
        const bulim = ({
            id: pemain,
            limit: njt
                })
        _db.push(bulim)
        fs.writeFileSync('./armor/FilesJson/grupos/limit.json', JSON.stringify(_db))
    }
}
exports.addBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance += duit
        fs.writeFileSync('./armor/funções/balance.json', JSON.stringify(_db))
    } else {
        const bulin = ({
            id: sender,
            balance: duit
                })
        _db.push(bulin)
        fs.writeFileSync('./armor/FilesJson/func/balance.json', JSON.stringify(_db))
    }
}
exports.kurangBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance -= duit
        fs.writeFileSync('./armor/FilesJson/func/balance.json', JSON.stringify(_db))
    }
}
exports.getBalance = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].balance
    } else {
        return 0
    }
}
exports.isGame = function(sender, isOwner, gcount, _db){
    if (isOwner) {return false;}
    let found = false;
    for (let i of _db){
        if(i.id === sender){
            let limits = i.glimit;
            if (limits >= gcount) {
                found = true;
                return true;
            }else{
                found = true;
                return false;
            }
        }
    }
    if (found === false){
        let obj = {id: sender, glimit:0};
        _db.push(obj);
        fs.writeFileSync('./armor/FilesJson/grupos/glimit.json',JSON.stringify(_db));
        return false;
    }
}
exports.gameAdd = function(sender, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].glimit += 1;
        fs.writeFileSync('./armor/FilesJson/grupos/glimit.json',JSON.stringify(_db));
    }
}
exports.givegame = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].glimit -= duit
        fs.writeFileSync('./armor/FilesJson/grupos/glimit.json', JSON.stringify(_db))
    } else {
        const njti = duit - duit - duit
        const bulimi = ({
            id: pemain,
            glimit: njti
                })
        _db.push(bulimi)
        fs.writeFileSync('./armor/FilesJson/grupos/glimit.json', JSON.stringify(_db))
    }
}
exports.cekGLimit = function(sender, gcount, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if(_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return gcount - _db[position].glimit
    } else {
        return gcount
    }
}
exports.createHit = function(sender, _db){
    const anohoh = { id: sender, hit: 0}
    _db.push(anohoh);
    fs.writeFileSync('./armor/FilesJson/usuarios/userhit.json',JSON.stringify(_db));''

}
exports.AddHit = function(sender, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].hit += 1;
        fs.writeFileSync('./armor/FilesJson/usuarios/userhit.json',JSON.stringify(_db));
    }
}
exports.gethitUser = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].hit
    }
}