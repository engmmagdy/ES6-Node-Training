function getDesc(obj, prop) {
    var desc = Object.getOwnPropertyDescriptor(obj, prop);
    return desc || (obj = Object.getPrototypeOf(obj) ? getDesc(obj, prop) : void 0);
}


function multiInherit(...protos) {
    return Object.create(new Proxy(Object.create(null), {
        has: (target, prop) => protos.some(obj => prop in obj),
        get(target, prop, receiver) {
            var obj = protos.find(obj => prop in obj);
            return obj ? Reflect.get(obj, prop, receiver) : void 0;
        },
        set(target, prop, value, receiver) {
            var obj = protos.find(obj => prop in obj);
            return Reflect.set(obj || Object.create(null), prop, value, receiver);
        },
        * enumerate(target) {
            yield* this.ownKeys(target);
        },
        ownKeys(target) {
            var hash = Object.create(null);
            for (var obj of protos)
                for (var p in obj)
                    if (!hash[p]) hash[p] = true;
            return Object.getOwnPropertyNames(hash);
        },
        getOwnPropertyDescriptor(target, prop) {
            var obj = protos.find(obj => prop in obj);
            var desc = obj ? getDesc(obj, prop) : void 0;
            if (desc) desc.configurable = true;
            return desc;
        },
        preventExtensions: (target) => false,
        defineProperty: (target, prop, desc) => false,
    }));
}

console.log(multiInherit());