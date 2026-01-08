class BankAccount {
      constructor() {
        this.balance = 0;
        this.transactions = [];
      }

      deposit(amount) {
        if (amount <= 0) return;
        this.balance += amount;
        this.transactions.unshift({
          type: 'deposit',
          amount,
          time: new Date()
        });
      }

      withdraw(amount) {
        if (amount <= 0 || amount > this.balance) return;
        this.balance -= amount;
        this.transactions.unshift({
          type: 'withdraw',
          amount,
          time: new Date()
        });
      }
    }

    const account = new BankAccount();

    function updateUI() {
      document.getElementById('balance').innerText =
        `$${account.balance.toFixed(2)}`;

      const list = document.getElementById('transactions');
      list.innerHTML = '';

      account.transactions.forEach(t => {
        const li = document.createElement('li');
        li.className = t.type + '-item';

        const left = document.createElement('div');
        left.innerText = t.type === 'deposit' ? 'Deposit' : 'Withdrawal';

        const right = document.createElement('div');
        right.innerHTML =
          `${t.type === 'deposit' ? '+' : '-'}$${t.amount.toFixed(2)}
           <div class="time">${t.time.toLocaleTimeString()}</div>`;

        li.appendChild(left);
        li.appendChild(right);
        list.appendChild(li);
      });
    }

    function deposit() {
      const amount = Number(document.getElementById('amount').value);
      account.deposit(amount);
      updateUI();
    }

    function withdraw() {
      const amount = Number(document.getElementById('amount').value);
      account.withdraw(amount);
      updateUI();
    }