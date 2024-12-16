<?php

namespace App;

use App\Models\BettingTicket;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

trait BettingServiceTrait
{

    public function createBettingTicket(array $data)
    {
        return DB::transaction(function () use ($data){
            if($this->wallet->balance < $data['stake_amount']){
                throw new \Exception('Insufficient Balance');
            }
            $ticketCode =  $this->generateUniqueTicketCode();
            $ticket  =  BettingTicket::create([
                'ticket_code' => $ticketCode,
                'user_id' => $this->id,
                'stake_amount' => $data['stake_amount'],
                'total_odds' => $data['total_odds'],
                'potential_win_amount' => $data['total_odds']*$data['stake_amount'],
                'games' => $data['games'],
                'expires_at' =>  now()->addHours(24)
            ]);

            //deduct stake amount from wallet
            $this->wallet->decrement('balance',$data['stake_amount']);
            return $ticket;
        });
    }

    public function getBettingTicket(string $ticket_code)
    {
        $ticket = BettingTicket::where('ticket_code',$ticket_code)->first();
        if(!$ticket)
        {
            throw new \Exception('Ticket not found');
        }
        return $ticket;
    }

    public function getAllBettingTicket(){
        $tickets = BettingTicket::where('user_id',$this->id)->get();
        return $tickets;
    }

    private function generateUniqueTicketCode():string
    {
        do{
            $code = strtoupper(Str::random(8));
        }while(BettingTicket::where('ticket_code',$code)->exists());
        return $code;
    }


}
