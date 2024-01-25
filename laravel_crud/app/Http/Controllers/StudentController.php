<?php

namespace App\Http\Controllers;

use App\Models\Student;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();
        if ($students->count()>0) {
            return response()->json([
                'status' => 200,
                'students' => $students
            ],200);
        }else {
            return response()->json([
                'status' => 404,
                'message' => 'no records found'
            ],404);
        }
    }

    public function store(Request $request){
        $validator= Validator::make($request->all(),[
            'name'  => 'required|max:100',
            'age'   => 'required|numeric|between:1,150', 
            'email' => 'required|email|max:100',
            'phone' => 'required|numeric|digits_between:10,15'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ],422);
        }else {
            $student = Student::create([
                'name'  => $request->name,
                'age'   => $request->age,
                'email' => $request->email,
                'phone' => $request->phone,
            ]);
        }
        if ($student) {
            return response()->json([
                'status' => 200,
                'message' => 'Student added successfully'
            ],200);
        }else {
            return response()->json([
                'status' => 500,
                'message' => 'Something went wrong'
            ],500);
        }
    }

    public function show(int $id){
        $student = Student::find($id);
        if ($student) {
            return response()->json([
                'status' => 200,
                'student' => $student
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'no such student found'
            ],404);
        }
    }

    public function edit(int $id){
        $student = Student::find($id);
        if ($student) {
            return response()->json([
                'status' => 200,
                'student' => $student
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'no such student found'
            ],404);
        }
    }

    public function update(Request $request,int $id){
        $validator= Validator::make($request->all(),[
            'name'  => 'required|max:100',
            'age'   => 'required|numeric|between:1,150', 
            'email' => 'required|email|max:100',
            'phone' => 'required|numeric|digits_between:10,15'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ],422);
        }else {
            $student = Student::find($id);
            if ($student) {
                $student->update([
                    'name'  => $request->name,
                    'age'   => $request->age,
                    'email' => $request->email,
                    'phone' => $request->phone,
                ]);
                return response()->json([
                    'status' => 200,
                    'message' => 'Student updated successfully'
                ],200);
            }else {
                return response()->json([
                    'status' => 500,
                    'message' => 'Something went wrong'
                ],500);
            }
        }
    }

    public function delete(int $id){
        $student = Student::find($id);
        if ($student) {
            $student->delete();
            return response()->json([
                'status' => 200,
                'message' => 'student deleted successfully'
            ],200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'no such student found'
            ],404);
        }
    }

}
