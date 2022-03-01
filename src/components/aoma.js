const React = (() => {
    let hooks = []; // tạo 1 mảng chứa các bộ nhớ khi user khai báo
    let indexHook = 0; // vị trí index của từng khai báo trong mảng chứa
  
    //  giải thích hàm setState
    const useState = (initialState) => {
      hooks[indexHook] = hooks[indexHook] || initialState; // gán giá trị lúc đầu vào cái mảng bộ nhớ hooks tại vị trí index =>
      const index = indexHook; // gán ra biến index để khi thay đổi indexHook++ ở dưới thì vẫn giữ được vị trí index của thằng này
      const setState = (newState) => (hooks[index] = newState); // 1: vì index mình đã móc ra nên index chỗ này sẽ không đổi nà (index là thuộc tính của hàm useState). 2: gán giá trị vào vị trí mà mình khai báo ở nãy ắ
      return [hooks[indexHook++], setState]; // trả về giá trị trong mảng nhớ và phương thức thay đổi giá trị đó
    };
  
    // return hook[indexHook++] là:
    // const result = hook[indexHook];
    // indexHook += 1;
    // return result;
  
    const useEffect = (effect, deps) => {
      const hasNoDeps = !deps; // kiểm tra xem có dependency hem
      const depHooks = hooks[indexHook]; // khai báo thằng 1 biến để chứa => sau này chơi với thằng này thôi
      const hasChangedDeps = depHooks
        ? !deps.every((el, i) => el === depHooks[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        effect();
        hooks[indexHook] = deps;
      }
      indexHook++; // done with this hook
    };
    return {
      render(Component) {
        const Comp = Component(); // run effects
        Comp.render();
        indexHook = 0; // reset for next render
        return Comp;
      },
      useEffect,
      useState,
    };
  })();
  
  
  let a = 0, b = 0
  let c = a || b
  console.log(c)
  let hooks = []; // tạo 1 mảng chứa các bộ nhớ khi user khai báo
  let indexHook = 0; // vị trí index của từng khai báo trong mảng chứa
  
  console.log(hooks[indexHook])